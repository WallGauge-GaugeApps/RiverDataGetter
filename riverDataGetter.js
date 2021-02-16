const EventEmitter = require('events');
const fetch = require('node-fetch');
const parseString = require("xml2js").parseString;

const logPrefix = 'riverDataGetter.js | ';

const forecastApiURL = 'https://water.weather.gov/ahps2/hydrograph_to_xml.php';
const dailyApiURL = 'https://waterservices.usgs.gov/nwis/dv/?format=json';
const instantApiURl = 'https://waterservices.usgs.gov/nwis/iv/?format=json';

const objExample = {
    "05587450": {
        "siteName": "Mississippi River at Grafton, IL",
        "latitude": 38.9679722,
        "longitude": -90.429,
        "00065": {
            "description": "Gage height, ft",
            "unitCode": "ft",
            "value": "00.00",
            "dateTime": new Date("2021-02-13T10:30:00.000-06:00")
        },
        "00060": {
            "description": "Discharge, cubic feet per second",
            "unitCode": "ft3/s",
            "value": "0000",
            "dateTime": new Date("2021-02-13T10:30:00.000-06:00")
        }
    }
};

const forecastObjExample = {
    "GRFI2": {
        "Current": 0,
        "Tomorrow": 0,
        "LongTermHigh": 0,
        "LongTermHighTime": new Date(),
        "LongTermLow": 0,
        "LongTermLowTime": new Date()
    }
};

class riverDataGetter {
    constructor() {
        this.dataObj = { current: objExample, forecast: forecastObjExample, daily: objExample }
        this.fCast = forecastObjExample;

    };

    /** Gets river foecast and returns promise when complete.  
     * Populates this.dataObj.forecast{}
     * returns a promise resolve = all xml data read from call
     * @param {String} siteID 'GRFI2' site location of gauge from //water.weather.gov/ahps
     * @return {Promise} resolved promise = xml forecast data object
     */

    getForecast(siteID = 'GRFI2') {
        return new Promise((resolve, reject) => {
            let uri = forecastApiURL + '?gage=' + siteID + '&output=xml'
            let callObj = {
                method: 'GET',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            };
            logit('Fetching forecast from ' + uri);
            fetch(uri, callObj)
                .then(res => res.text())
                .then((respText) => {
                    try {
                        parseString(respText, (err, result) => {
                            if (err) {
                                console.error('parsing results of fetch. ', err);
                                reject(err);
                            } else {
                                var currentLvl = result.site.observed[0].datum[0].primary[0]._;
                                var currentLvlTime = new Date(result.site.observed[0].datum[0].valid[0]._);
                                var frcst1DayLvl = result.site.forecast[0].datum[3].primary[0]._;
                                var lastFcast = result.site.forecast[0].datum;
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
                                this.dataObj.forecast[siteID] = {};

                                this.dataObj.forecast[siteID].Current = Number(currentLvl);
                                this.dataObj.forecast[siteID].Tomorrow = Number(frcst1DayLvl);
                                this.dataObj.forecast[siteID].LongTermHigh = Number(peekAmount);
                                this.dataObj.forecast[siteID].LongTermHighTime = peekTime;
                                this.dataObj.forecast[siteID].LongTermLow = Number(dipAmount);
                                this.dataObj.forecast[siteID].LongTermLowTime = dipTime;

                                // this.fCast.Current = Number(currentLvl);
                                // this.fCast.Tomorrow = Number(frcst1DayLvl);
                                // this.fCast.LongTermHigh = Number(peekAmount);
                                // this.fCast.LongTermHighTime = peekTime;
                                // this.fCast.LongTermLow = Number(dipAmount);
                                // this.fCast.LongTermLowTime = dipTime;
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
     * Populates this.dataObj.current{}
     * returns a promise resolve = all json data read from call
     * 
     * To get a list os all dataSiteCodes in Illinois https://waterservices.usgs.gov/nwis/site/?format=rdb&stateCd=il
     * 
     * @param {[string]} dataSiteCode ["05587450", "05587498"] Site codes to look up
     * @param {[string]} dataParCode ["00060", "00065"] defaults to null (read all available data for dataSiteCode)
     * @return {Promise} resolved promise = json data object
     */
    getCurrentData(dataSiteCode = ["05587450", "05587498"], dataParCode = null) {
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
            logit('Fetching current from ' + uri);
            try {
                fetch(uri, callObj)
                    .then(res => res.json())
                    .then((jsonData) => {
                        jsonData.value.timeSeries.forEach((rcd) => {
                            this.dataObj.current[rcd.sourceInfo.siteCode[0].value] = {};
                        })
                        jsonData.value.timeSeries.forEach((rcd) => {
                            let siteCode = rcd.sourceInfo.siteCode[0].value;
                            this.dataObj.current[siteCode].siteName = rcd.sourceInfo.siteName;
                            this.dataObj.current[siteCode].latitude = rcd.sourceInfo.geoLocation.geogLocation.latitude;
                            this.dataObj.current[siteCode].longitude = rcd.sourceInfo.geoLocation.geogLocation.longitude;
                            let vc = rcd.variable.variableCode[0].value
                            this.dataObj.current[siteCode][vc] = {};
                            this.dataObj.current[siteCode][vc].description = rcd.variable.variableDescription;
                            this.dataObj.current[siteCode][vc].unitCode = rcd.variable.unit.unitCode;
                            this.dataObj.current[siteCode][vc].value = rcd.values[0].value[0].value;
                            this.dataObj.current[siteCode][vc].dateTime = new Date(rcd.values[0].value[0].dateTime);
                        });
                        resolve(jsonData);
                    });
            } catch (err) {
                reject(err);
            };
        });
    };

    /**
     * Populates this.dataObj.current{}
     * returns a promise resolve = all json data read from call
     * 
     * To get a list os all dataSiteCodes in Illinois https://waterservices.usgs.gov/nwis/site/?format=rdb&stateCd=il
     * @param {[string]} dataSiteCode ["05587450", "05587498"] Site codes to look up
     * @param {[string]} dataParCode ["00060", "00065"] defaults to null (read all available data for dataSiteCode)
     * @return {Promise} resolved promise = json data object
     */
    getDailyData(dataSiteCode = ["05587450", "05587498"], dataParCode = null) {
        return new Promise((resolve, reject) => {
            let callObj = {
                method: 'GET',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                compress: true
            };
            let uri = dailyApiURL + '&sites=' + dataSiteCode;
            if (dataParCode != null) {
                uri = dailyApiURL + '&sites=' + dataSiteCode + '&parameterCD=' + dataParCode;
            }
            logit('Fetching daily from ' + uri);
            try {
                fetch(uri, callObj)
                    .then(res => res.json())
                    .then((jsonData) => {
                        jsonData.value.timeSeries.forEach((rcd) => {
                            this.dataObj.daily[rcd.sourceInfo.siteCode[0].value] = {};
                        })
                        jsonData.value.timeSeries.forEach((rcd) => {
                            let siteCode = rcd.sourceInfo.siteCode[0].value;
                            this.dataObj.daily[siteCode].siteName = rcd.sourceInfo.siteName;
                            this.dataObj.daily[siteCode].latitude = rcd.sourceInfo.geoLocation.geogLocation.latitude;
                            this.dataObj.daily[siteCode].longitude = rcd.sourceInfo.geoLocation.geogLocation.longitude;
                            let vc = rcd.variable.variableCode[0].value
                            this.dataObj.daily[siteCode][vc] = {};
                            this.dataObj.daily[siteCode][vc].description = rcd.variable.variableDescription;
                            this.dataObj.daily[siteCode][vc].unitCode = rcd.variable.unit.unitCode;
                            this.dataObj.daily[siteCode][vc].value = rcd.values[0].value[0].value;
                            this.dataObj.daily[siteCode][vc].dateTime = new Date(rcd.values[0].value[0].dateTime);
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

