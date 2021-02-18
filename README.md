# RiverDataGetter

The riverDataGetter.js is a Node.js class for accessing river gauge data from the water.weather.gov and waterservices.usgs.gov web APIs.  These data services are free and maintained by the USGS and NOAA.

## Data Source

This class uses the following three REST Web Service endpoints to retrieve river gauge data:

* `water.weather.gov/ahps2/hydrograph_to_xml.php`
  * This endpoint is accessed by calling the riverDataGetter.getForecast(`siteID` = 'GRFI2')
  * It will retrieve the river forecast for the `siteID` passed to it.  You can find the `siteID` by clicking on the [map at this link](https://water.weather.gov/ahps/region_iframe.php?scale=true) and drill down to a gauge location.  Then hover your mouse over the colored dot or click on it to open and see the site ID.

* `waterservices.usgs.gov/nwis/dv/`
  * This endpoint is accessed by calling the riverDataGetter.getDailyData(`dataSiteCode, dataParCode`).
  * It will return the data collected by that gauge updated every 24 hours.  Some gauge data is only updated once a day at midnight and this end point is used to access this data.
  * The `dataSiteCode` is the code that references the physical location of the river gauge.  Use [this map and click on the state and gauge site](https://waterdata.usgs.gov/nwis/rt) to find a gauge's data site code.  You can also query the data site code database with this query tool [Data site code query](https://waterservices.usgs.gov/rest/IV-Test-Tool.html). 
  * The `dataParCode` is optional and will return all data for a gauge if left blank.  If you would like to narrow your call to specific data types you can pass it [parameter codes found here](https://help.waterdata.usgs.gov/codes-and-parameters/parameters).

* `waterservices.usgs.gov/nwis/iv/`
  * This endpoint is accessed by calling the riverDataGetter.getCurrentData(dataSiteCode, dataParCode)
  * It will return current gauge data collected and updated about every 15 minutes by the automated gauges on the river.
  * The `dataSiteCode` is the code that references the physical location of the river gauge.  Use [this map and click on the state and gauge site](https://waterdata.usgs.gov/nwis/rt) to find a gauge's data site code.  You can also query the data site code database with this query tool [Data site code query](https://waterservices.usgs.gov/rest/IV-Test-Tool.html). 
  * The `dataParCode` is optional and will return all data for a gauge if left blank.  If you would like to narrow your call to specific data types you can pass it [parameter codes found here](https://help.waterdata.usgs.gov/codes-and-parameters/parameters).

## How to install
* type `git clone https://github.com/WallGauge-GaugeApps/RiverDataGetter.git`
* type `cd RiverDataGetter`
* type `npm install`
* to test type `node testMe`

## Data Object

```
{
  current: {                                                // dtaObj.current is populated with from calls to .getCurrentData(dataSiteCode)
    '05587450': {                                           // Site Code number passed as dataSiteCode to the getCurrentData method
      siteName: 'Mississippi River at Grafton, IL',         // Location / name of the gauge
      latitude: 38.9679722,                                 // River Gauge's latitude
      longitude: -90.429,                                   // River Gauge's longitude
      '00060': {                                            // Parameter code for discharge (river flow past gauge)
        description: 'Discharge, cubic feet per second',    // Parameter description
        unitCode: 'ft3/s',                                  // Unit code for parameter in this case cubic feet per second
        value: '92400',                                     // String = the value read from the gauge database
        dateTime: 2021-02-17T06:00:00.000Z                  // Date = the time this data was read and placed into USGS.gov database
      },
      '00065': {                                            // Parameter code for Gauge Height (water depth)
        description: 'Gage height, feet',                   // Parameter description
        unitCode: 'ft',                                     // Unit code for parameter in this case it is feet above gauge height
        value: '16.29',                                     // String = the value read from the gauge database
        dateTime: 2021-02-18T06:00:00.000Z                  // Date = the time this data was read and placed into USGS.gov database
      }
    }
  },
  forecast: {                                               // dtaObj.forecast is populated with from calls to .getForecast(siteID)
    GRFI2: {                                                // Site ID passed as siteID to the .getForecast method
      Current: 16.28,                                       // Number = the current gauge height
      Tomorrow: 16.1,                                       // Number = the forecasted gauge height 24hours from now
      LongTermHigh: 16.28,                                  // Number = the highest peak over the next 14 days
      LongTermHighTime: 2021-02-18T13:30:00.000Z,           // Date = the date and time of the LongTermHigh
      LongTermLow: 15.9,                                    // Number = the lowest water level over the next 14 days
      LongTermLowTime: 2021-02-20T18:00:00.000Z             // Date = the date and time of the LongTermLow
    }
  },
  daily: {                                                  // dtaObj.daily is populated with results from calls to .getDailyData(dataSiteCode)
    '05587450': {                                           // Site Code number passed as dataSiteCode to the getDailyData method
      siteName: 'Mississippi River at Grafton, IL',         // Location / name of the gauge
      latitude: 38.9679722,                                 // River Gauge's latitude
      longitude: -90.429,                                   // River Gauge's longitude
      '00060': {                                            // Parameter code for discharge (river flow past gauge)
        description: 'Discharge, cubic feet per second',    // Parameter description
        unitCode: 'ft3/s',                                  // Unit code for parameter in this case cubic feet per second
        value: '92400',                                     // String = the value read from the gauge database
        dateTime: 2021-02-17T06:00:00.000Z                  // Date = the time this data was read and placed into USGS.gov database
      },
      '00065': {                                            // Parameter code for Gauge Height (water depth)
        description: 'Gage height, feet',                   // Parameter description
        unitCode: 'ft',                                     // Unit code for parameter in this case it is feet above gauge height
        value: '16.29',                                     // String = the value read from the gauge database
        dateTime: 2021-02-18T06:00:00.000Z                  // Date = the time this data was read and placed into USGS.gov database
      }
    }
  }
}
```

## More Information

[USGS water services](https://waterservices.usgs.gov/rest/) For current and historic river levels.
[Parameter codes](https://help.waterdata.usgs.gov/codes-and-parameters/parameters) 5 digit codes to ID data types IE 00065 = Gauge Height
[Lookup site based on state](https://waterservices.usgs.gov/rest/IV-Test-Tool.html)
To find a site number [open this map](https://waterdata.usgs.gov/nwis/rt) and drill down to a gauge.
[parameter code definitions](https://help.waterdata.usgs.gov/parameter_cd?group_cd=%25) returns ALL parameters


NOAA [Appropriate data use](https://www.weather.gov/disclaimer) statement

## Maps as I Frames
From this document: https://water.weather.gov/ahps2/pdf/AHPS_region_iframe.pdf

<iframe src="https://water.weather.gov/ahps/region_iframe.php?scale=true" height="830" width="960" frameborder="0" scrolling="no"></iframe>
 