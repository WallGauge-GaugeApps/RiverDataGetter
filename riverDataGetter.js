const EventEmitter = require('events');
const fetch = require('node-fetch');
const parseString = require("xml2js").parseString;

const logPrefix = 'riverDataGetter.js | ';

const dailyApiURL = 'https://waterservices.usgs.gov/nwis/dv/?format=json&sites=';
const instantApiURl = 'https://waterservices.usgs.gov/nwis/iv/?format=json';

const instantObjExample = {
    "05587450": {
        "siteName": "Mississippi River at Grafton, IL",
        "latitude": 38.9679722,
        "longitude": -90.429,
        "00065": {
            "description": "Gage height, ft",
            "unitCode": "ft",
            "value": "00.00",
            "dateTime": "2021-02-13T10:30:00.000-06:00"
        },
        "00060": {
            "description": "Discharge, cubic feet per second",
            "unitCode": "ft3/s",
            "value": "0000",
            "dateTime": "2021-02-13T10:30:00.000-06:00"
        }
    }
};

const forecastObjExample = {
    Current: 0,
    Tomorrow: 0,
    LongTermHigh: 0,
    LongTermHighTime: new Date(),
    LongTermLow: 0,
    LongTermLowTime: new Date()
};

class riverDataGetter {
    constructor() {
        this.dataObj = { instant: instantObjExample }
        this.fCast = forecastObjExample;

    };

    /** Async call to fetch and parse river forecst data.  Emits newData whith this.fCast.
     * 
     * @param {String} siteID 'GRFI2' site location of gauge from //water.weather.gov/ahps
     */

    getForecast(siteID = 'GRFI2') {
        return new Promise((resolve, reject) => {
            let uri = 'https://water.weather.gov/ahps2/hydrograph_to_xml.php?gage=' + siteID + '&output=xml'
            let callObj = {
                method: 'GET',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            };
            logit('Fetching data from ' + uri);
            fetch(uri, callObj)
                .then(res => res.text())
                .then((respText) => {
                    try {
                        parseString(respText, (err, result) => {
                            if (err) {
                                console.error('parsing results of fetch. ', err);
                                reject(err);
                            } else {
                                //var siteName = result.site.$.name
                                //var siteId = result.site.$.id
                                var currentLvl = result.site.observed[0].datum[0].primary[0]._;
                                var currentLvlTime = new Date(result.site.observed[0].datum[0].valid[0]._);
                                //var lvlNow = Number(currentLvl);

                                var frcst1DayLvl = result.site.forecast[0].datum[3].primary[0]._;
                                //var frcst1DayTime = new Date(result.site.forecast[0].datum[3].valid[0]._);     
                                //var change1Day = 12 * (Number(frcst1DayLvl) - Number(currentLvl));        // caculate the change in inches   

                                //var frcst2DayLvl = result.site.forecast[0].datum[7].primary[0]._;
                                //var frcst2DayTime = new Date(result.site.forecast[0].datum[7].valid[0]._);
                                //var change2Day = 12 * (Number(frcst2DayLvl) - Number(currentLvl));        // caculate the change in inches 

                                //var frcst7DayLvl = result.site.forecast[0].datum[27].primary[0]._;
                                //var frcst7DayTime = new Date(result.site.forecast[0].datum[27].valid[0]._);   
                                //var change7Day = 12 * (Number(frcst7DayLvl) - Number(currentLvl));        // caculate the change in inches   

                                var lastFcast = result.site.forecast[0].datum;

                                //logit("Reading through forecast to find peek and dip. Fcast size = "+ lastFcast.length)
                                var peekAmount = Number(currentLvl);
                                var peekTime = currentLvlTime;
                                var dipAmount = Number(currentLvl);
                                var dipTime = currentLvlTime;

                                for (var i = 0; i < lastFcast.length; i++) {
                                    var x = Number(result.site.forecast[0].datum[i].primary[0]._);
                                    if (x > peekAmount) {
                                        peekAmount = x;
                                        peekTime = new Date(result.site.forecast[0].datum[i].valid[0]._);
                                    }
                                    if (x < dipAmount) {
                                        dipAmount = x;
                                        dipTime = new Date(result.site.forecast[0].datum[i].valid[0]._);
                                    }
                                }

                                //logit("peekAmount = " + peekAmount + ", on " + peekTime);
                                //logit("dipAmount = " + dipAmount + ", on " + dipTime);         

                                this.fCast.Current = Number(currentLvl);
                                this.fCast.Tomorrow = Number(frcst1DayLvl);
                                this.fCast.LongTermHigh = Number(peekAmount);
                                this.fCast.LongTermHighTime = peekTime;
                                this.fCast.LongTermLow = Number(dipAmount);
                                this.fCast.LongTermLowTime = dipTime;
                                resolve(result);
                            }
                        });
                    } catch (err) {
                        console.error("Error parsing data from https://water.weather.gov", err);
                    };
                })
                .catch(err => {
                    reject(err)
                });
        })
    };

    /** Reads Instant values for a site code
     * Populates this.dataObj.instant{}
     * returns a promise resolve = all json data read from call
     * 
     * To get a list os all dataSiteCodes in Illinois https://waterservices.usgs.gov/nwis/site/?format=rdb&stateCd=il
     * 
     * @param {[string]} dataSiteCode ["05587450", "05587498"] Site codes to look up
     * @param {[string]} dataParCode ["00060", "00065"] defaults to null (read all available data for dataSiteCode)
     * @return {Promise} resolved promise = json data object
     */
    getInstantData(dataSiteCode = ["05587450", "05587498"], dataParCode = null) {
        return new Promise((resolve, reject) => {
            let callObj = {
                method: 'GET',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                compress: true
            };
            let uri = instantApiURl + '&sites=' + dataSiteCode;
            if (dataParCode != null) {
                uri = instantApiURl + '&sites=' + dataSiteCode + '&parameterCD=' + dataParCode;
            }
            try {
                fetch(uri, callObj)
                    .then(res => res.json())
                    .then((jsonData) => {
                        jsonData.value.timeSeries.forEach((rcd) => {
                            this.dataObj.instant[rcd.sourceInfo.siteCode[0].value] = {};
                        })
                        jsonData.value.timeSeries.forEach((rcd) => {
                            let siteCode = rcd.sourceInfo.siteCode[0].value;
                            this.dataObj.instant[siteCode].siteName = rcd.sourceInfo.siteName;
                            this.dataObj.instant[siteCode].latitude = rcd.sourceInfo.geoLocation.geogLocation.latitude;
                            this.dataObj.instant[siteCode].longitude = rcd.sourceInfo.geoLocation.geogLocation.longitude;
                            let vc = rcd.variable.variableCode[0].value
                            this.dataObj.instant[siteCode][vc] = {};
                            this.dataObj.instant[siteCode][vc].description = rcd.variable.variableDescription;
                            this.dataObj.instant[siteCode][vc].unitCode = rcd.variable.unit.unitCode;
                            this.dataObj.instant[siteCode][vc].value = rcd.values[0].value[0].value;
                            this.dataObj.instant[siteCode][vc].dateTime = rcd.values[0].value[0].dateTime;
                        });
                        resolve(jsonData);
                    });
            } catch (err) {
                reject(err);
            };
        });
    };

};

function logit(txt = '') {
    console.debug(logPrefix + txt);
};

module.exports = riverDataGetter

var jsonDat = {
    name: 'ns1:timeSeriesResponseType',
    declaredType: 'org.cuahsi.waterml.TimeSeriesResponseType',
    scope: 'javax.xml.bind.JAXBElement$GlobalScope',
    value: {
        queryInfo: {
            queryURL: 'http://waterservices.usgs.gov/nwis/iv/format=json&sites=05587450,05587498&parameterCD=00060,00065',
            criteria: {
                locationParam: '[ALL:05587450, ALL:05587498]',
                variableParam: '[00060, 00065]',
                parameter: []
            },
            note: [
                {
                    value: '[ALL:05587450, ALL:05587498]',
                    title: 'filter:sites'
                },
                {
                    value: '[mode=LATEST, modifiedSince=null]',
                    title: 'filter:timeRange'
                },
                { value: 'methodIds=[ALL]', title: 'filter:methodId' },
                { value: '2021-02-13T19:28:01.802Z', title: 'requestDT' },
                {
                    value: '963d8880-6e31-11eb-84ec-005056beda50',
                    title: 'requestId'
                },
                {
                    value: 'Provisional data are subject to revision. Go to http://waterdata.usgs.gov/nwis/help/?provisional for more information.',
                    title: 'disclaimer'
                },
                { value: 'caas01', title: 'server' }
            ]
        },
        timeSeries: [
            {
                sourceInfo: {
                    siteName: 'Mississippi River at Grafton, IL',
                    siteCode: [
                        { value: '05587450', network: 'NWIS', agencyCode: 'USGS' }
                    ],
                    timeZoneInfo: {
                        defaultTimeZone: { zoneOffset: '-06:00', zoneAbbreviation: 'CST' },
                        daylightSavingsTimeZone: { zoneOffset: '-05:00', zoneAbbreviation: 'CDT' },
                        siteUsesDaylightSavingsTime: true
                    },
                    geoLocation: {
                        geogLocation: {
                            srs: 'EPSG:4326',
                            latitude: 38.9679722,
                            longitude: -90.429
                        },
                        localSiteXY: []
                    },
                    note: [],
                    siteType: [],
                    siteProperty: [
                        { value: 'ST', name: 'siteTypeCd' },
                        { value: '07110009', name: 'hucCd' },
                        { value: '17', name: 'stateCd' },
                        { value: '17083', name: 'countyCd' }
                    ]
                },
                variable: {
                    variableCode: [
                        {
                            value: '00060',
                            network: 'NWIS',
                            vocabulary: 'NWIS:UnitValues',
                            variableID: 45807197,
                            default: true
                        }
                    ],
                    variableName: 'Streamflow, ft&#179;/s',
                    variableDescription: 'Discharge, cubic feet per second',
                    valueType: 'Derived Value',
                    unit: { unitCode: 'ft3/s' },
                    options: { option: [{ name: 'Statistic', optionCode: '00000' }] },
                    note: [],
                    noDataValue: -999999,
                    variableProperty: [],
                    oid: '45807197'
                },
                values: [
                    {
                        value: [
                            {
                                value: '97200',
                                qualifiers: ['P'],
                                dateTime: '2021-02-13T13:00:00.000-06:00'
                            }
                        ],
                        qualifier: [
                            {
                                qualifierCode: 'P',
                                qualifierDescription: 'Provisional data subject to revision.',
                                qualifierID: 0,
                                network: 'NWIS',
                                vocabulary: 'uv_rmk_cd'
                            }
                        ],
                        qualityControlLevel: [],
                        method: [{ methodDescription: '', methodID: 231787 }],
                        source: [],
                        offset: [],
                        sample: [],
                        censorCode: []
                    }
                ],
                name: 'USGS:05587450:00060:00000'
            },
            {
                sourceInfo: {
                    siteName: 'Mississippi River at Grafton, IL',
                    siteCode: [
                        { value: '05587450', network: 'NWIS', agencyCode: 'USGS' }
                    ],
                    timeZoneInfo: {
                        defaultTimeZone: { zoneOffset: '-06:00', zoneAbbreviation: 'CST' },
                        daylightSavingsTimeZone: { zoneOffset: '-05:00', zoneAbbreviation: 'CDT' },
                        siteUsesDaylightSavingsTime: true
                    },
                    geoLocation: {
                        geogLocation: {
                            srs: 'EPSG:4326',
                            latitude: 38.9679722,
                            longitude: -90.429
                        },
                        localSiteXY: []
                    },
                    note: [],
                    siteType: [],
                    siteProperty: [
                        { value: 'ST', name: 'siteTypeCd' },
                        { value: '07110009', name: 'hucCd' },
                        { value: '17', name: 'stateCd' },
                        { value: '17083', name: 'countyCd' }
                    ]
                },
                variable: {
                    variableCode: [
                        {
                            value: '00065',
                            network: 'NWIS',
                            vocabulary: 'NWIS:UnitValues',
                            variableID: 45807202,
                            default: true
                        }
                    ],
                    variableName: 'Gage height, ft',
                    variableDescription: 'Gage height, feet',
                    valueType: 'Derived Value',
                    unit: { unitCode: 'ft' },
                    options: { option: [{ name: 'Statistic', optionCode: '00000' }] },
                    note: [],
                    noDataValue: -999999,
                    variableProperty: [],
                    oid: '45807202'
                },
                values: [
                    {
                        value: [
                            {
                                value: '16.08',
                                qualifiers: ['P'],
                                dateTime: '2021-02-13T13:00:00.000-06:00'
                            }
                        ],
                        qualifier: [
                            {
                                qualifierCode: 'P',
                                qualifierDescription: 'Provisional data subject to revision.',
                                qualifierID: 0,
                                network: 'NWIS',
                                vocabulary: 'uv_rmk_cd'
                            }
                        ],
                        qualityControlLevel: [],
                        method: [{ methodDescription: '', methodID: 76827 }],
                        source: [],
                        offset: [],
                        sample: [],
                        censorCode: []
                    }
                ],
                name: 'USGS:05587450:00065:00000'
            },
            {
                sourceInfo: {
                    siteName: 'Mississippi River Pool Lock and Dam 26 at Alton,IL',
                    siteCode: [
                        { value: '05587498', network: 'NWIS', agencyCode: 'USGS' }
                    ],
                    timeZoneInfo: {
                        defaultTimeZone: { zoneOffset: '-06:00', zoneAbbreviation: 'CST' },
                        daylightSavingsTimeZone: { zoneOffset: '-05:00', zoneAbbreviation: 'CDT' },
                        siteUsesDaylightSavingsTime: true
                    },
                    geoLocation: {
                        geogLocation: {
                            srs: 'EPSG:4326',
                            latitude: 38.88644444,
                            longitude: -90.1825472
                        },
                        localSiteXY: []
                    },
                    note: [],
                    siteType: [],
                    siteProperty: [
                        { value: 'ST', name: 'siteTypeCd' },
                        { value: '07110009', name: 'hucCd' },
                        { value: '17', name: 'stateCd' },
                        { value: '17119', name: 'countyCd' }
                    ]
                },
                variable: {
                    variableCode: [
                        {
                            value: '00065',
                            network: 'NWIS',
                            vocabulary: 'NWIS:UnitValues',
                            variableID: 45807202,
                            default: true
                        }
                    ],
                    variableName: 'Gage height, ft',
                    variableDescription: 'Gage height, feet',
                    valueType: 'Derived Value',
                    unit: { unitCode: 'ft' },
                    options: { option: [{ name: 'Statistic', optionCode: '00000' }] },
                    note: [],
                    noDataValue: -999999,
                    variableProperty: [],
                    oid: '45807202'
                },
                values: [
                    {
                        value: [
                            {
                                value: '19.34',
                                qualifiers: ['P'],
                                dateTime: '2021-02-13T13:00:00.000-06:00'
                            }
                        ],
                        qualifier: [
                            {
                                qualifierCode: 'P',
                                qualifierDescription: 'Provisional data subject to revision.',
                                qualifierID: 0,
                                network: 'NWIS',
                                vocabulary: 'uv_rmk_cd'
                            }
                        ],
                        qualityControlLevel: [],
                        method: [{ methodDescription: '', methodID: 76831 }],
                        source: [],
                        offset: [],
                        sample: [],
                        censorCode: []
                    }
                ],
                name: 'USGS:05587498:00065:00000'
            }
        ]
    },
    nil: false,
    globalScope: true,
    typeSubstituted: false
}