const EventEmitter = require('events');
const fetch = require('node-fetch');

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

class riverDataGetter extends EventEmitter {
    constructor() {
        super();
        this.dataObj = { instant: instantObjExample }

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