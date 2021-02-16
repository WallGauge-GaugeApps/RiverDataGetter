{"name" : "ns1:timeSeriesResponseType",
"declaredType" : "org.cuahsi.waterml.TimeSeriesResponseType",
"scope" : "javax.xml.bind.JAXBElement$GlobalScope",
"value" : {
  "queryInfo" : {
    "queryURL" : "http://waterservices.usgs.gov/nwis/dv/format=json&indent=on&stateCd=il&parameterCd=00010&siteStatus=active",
    "criteria" : {
      "locationParam" : "[]",
      "variableParam" : "[00010]",
      "parameter" : [ ]
    },
    "note" : [ {
      "value" : "[il]",
      "title" : "filter:stateCd"
    }, {
      "value" : "[mode=LATEST, modifiedSince=null]",
      "title" : "filter:timeRange"
    }, {
      "value" : "methodIds=[ALL]",
      "title" : "filter:methodId"
    }, {
      "value" : "2021-02-14T16:31:43.298Z",
      "title" : "requestDT"
    }, {
      "value" : "1f58f540-6ee2-11eb-af5b-005056beda50",
      "title" : "requestId"
    }, {
      "value" : "Provisional data are subject to revision. Go to http://waterdata.usgs.gov/nwis/help/?provisional for more information.",
      "title" : "disclaimer"
    }, {
      "value" : "caas01",
      "title" : "server"
    } ]
  },
  "timeSeries" : [ {
    "sourceInfo" : {
      "siteName" : "VERMILION RIVER NEAR DANVILLE, IL",
      "siteCode" : [ {
        "value" : "03339000",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 40.10087009,
          "longitude" : -87.5972419
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "05120109",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17183",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Mean",
          "name" : "Statistic",
          "optionCode" : "00003"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "0.3",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48117
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:03339000:00010:00003"
  }, {
    "sourceInfo" : {
      "siteName" : "EMBARRAS RIVER AT LAWRENCEVILLE, IL",
      "siteCode" : [ {
        "value" : "03346500",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 38.7236111,
          "longitude" : -87.6644444
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "05120112",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17101",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Maximum",
          "name" : "Statistic",
          "optionCode" : "00001"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "-2.8",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-10T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48158
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:03346500:00010:00001"
  }, {
    "sourceInfo" : {
      "siteName" : "EMBARRAS RIVER AT LAWRENCEVILLE, IL",
      "siteCode" : [ {
        "value" : "03346500",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 38.7236111,
          "longitude" : -87.6644444
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "05120112",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17101",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Minimum",
          "name" : "Statistic",
          "optionCode" : "00002"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "-4.7",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-10T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48159
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:03346500:00010:00002"
  }, {
    "sourceInfo" : {
      "siteName" : "EMBARRAS RIVER AT LAWRENCEVILLE, IL",
      "siteCode" : [ {
        "value" : "03346500",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 38.7236111,
          "longitude" : -87.6644444
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "05120112",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17101",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Mean",
          "name" : "Statistic",
          "optionCode" : "00003"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "-3.8",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-10T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48160
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:03346500:00010:00003"
  }, {
    "sourceInfo" : {
      "siteName" : "LITTLE WABASH RIVER AT MAIN ST AT CARMI, IL",
      "siteCode" : [ {
        "value" : "03381495",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 38.09226857,
          "longitude" : -88.1561487
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "05120114",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17193",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Maximum",
          "name" : "Statistic",
          "optionCode" : "00001"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "28.2",
        "qualifiers" : [ "P" ],
        "dateTime" : "2019-07-18T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48208
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:03381495:00010:00001"
  }, {
    "sourceInfo" : {
      "siteName" : "LITTLE WABASH RIVER AT MAIN ST AT CARMI, IL",
      "siteCode" : [ {
        "value" : "03381495",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 38.09226857,
          "longitude" : -88.1561487
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "05120114",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17193",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Minimum",
          "name" : "Statistic",
          "optionCode" : "00002"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "27.5",
        "qualifiers" : [ "P" ],
        "dateTime" : "2019-07-18T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48209
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:03381495:00010:00002"
  }, {
    "sourceInfo" : {
      "siteName" : "LITTLE WABASH RIVER AT MAIN ST AT CARMI, IL",
      "siteCode" : [ {
        "value" : "03381495",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 38.09226857,
          "longitude" : -88.1561487
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "05120114",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17193",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Mean",
          "name" : "Statistic",
          "optionCode" : "00003"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "27.9",
        "qualifiers" : [ "P" ],
        "dateTime" : "2019-07-18T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48210
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:03381495:00010:00003"
  }, {
    "sourceInfo" : {
      "siteName" : "LAKE MICHIGAN AT JACKSON PARK AT HYDE PARK, IL",
      "siteCode" : [ {
        "value" : "04092440",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.78444444,
          "longitude" : -87.5675
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "LK",
        "name" : "siteTypeCd"
      }, {
        "value" : "04060200",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17031",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Maximum",
          "name" : "Statistic",
          "optionCode" : "00001"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "21.3",
        "qualifiers" : [ "A" ],
        "dateTime" : "2018-09-03T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "A",
        "qualifierDescription" : "Approved for publication -- Processing and review completed.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48266
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:04092440:00010:00001"
  }, {
    "sourceInfo" : {
      "siteName" : "LAKE MICHIGAN AT JACKSON PARK AT HYDE PARK, IL",
      "siteCode" : [ {
        "value" : "04092440",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.78444444,
          "longitude" : -87.5675
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "LK",
        "name" : "siteTypeCd"
      }, {
        "value" : "04060200",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17031",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Minimum",
          "name" : "Statistic",
          "optionCode" : "00002"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "16.8",
        "qualifiers" : [ "A" ],
        "dateTime" : "2018-09-03T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "A",
        "qualifierDescription" : "Approved for publication -- Processing and review completed.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48267
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:04092440:00010:00002"
  }, {
    "sourceInfo" : {
      "siteName" : "LAKE MICHIGAN AT JACKSON PARK AT HYDE PARK, IL",
      "siteCode" : [ {
        "value" : "04092440",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.78444444,
          "longitude" : -87.5675
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "LK",
        "name" : "siteTypeCd"
      }, {
        "value" : "04060200",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17031",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Mean",
          "name" : "Statistic",
          "optionCode" : "00003"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "19.9",
        "qualifiers" : [ "A" ],
        "dateTime" : "2018-09-03T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "A",
        "qualifierDescription" : "Approved for publication -- Processing and review completed.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48268
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:04092440:00010:00003"
  }, {
    "sourceInfo" : {
      "siteName" : "ROCK RIVER AT BYRON, IL",
      "siteCode" : [ {
        "value" : "05440700",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 42.1230805,
          "longitude" : -89.2559395
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07090005",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17141",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Maximum",
          "name" : "Statistic",
          "optionCode" : "00001"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "0.2",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48424
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05440700:00010:00001"
  }, {
    "sourceInfo" : {
      "siteName" : "ROCK RIVER AT BYRON, IL",
      "siteCode" : [ {
        "value" : "05440700",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 42.1230805,
          "longitude" : -89.2559395
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07090005",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17141",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Minimum",
          "name" : "Statistic",
          "optionCode" : "00002"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "0.2",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48425
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05440700:00010:00002"
  }, {
    "sourceInfo" : {
      "siteName" : "ROCK RIVER AT BYRON, IL",
      "siteCode" : [ {
        "value" : "05440700",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 42.1230805,
          "longitude" : -89.2559395
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07090005",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17141",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Mean",
          "name" : "Statistic",
          "optionCode" : "00003"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "0.2",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48426
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05440700:00010:00003"
  }, {
    "sourceInfo" : {
      "siteName" : "ROCK RIVER NEAR JOSLIN, IL",
      "siteCode" : [ {
        "value" : "05446500",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.5561111,
          "longitude" : -90.1852778
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07090005",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17161",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Maximum",
          "name" : "Statistic",
          "optionCode" : "00001"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "1.3",
        "qualifiers" : [ "P" ],
        "dateTime" : "2020-12-17T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48445
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05446500:00010:00001"
  }, {
    "sourceInfo" : {
      "siteName" : "ROCK RIVER NEAR JOSLIN, IL",
      "siteCode" : [ {
        "value" : "05446500",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.5561111,
          "longitude" : -90.1852778
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07090005",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17161",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Minimum",
          "name" : "Statistic",
          "optionCode" : "00002"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "0.8",
        "qualifiers" : [ "P" ],
        "dateTime" : "2020-12-17T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48446
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05446500:00010:00002"
  }, {
    "sourceInfo" : {
      "siteName" : "ROCK RIVER NEAR JOSLIN, IL",
      "siteCode" : [ {
        "value" : "05446500",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.5561111,
          "longitude" : -90.1852778
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07090005",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17161",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Mean",
          "name" : "Statistic",
          "optionCode" : "00003"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "1.0",
        "qualifiers" : [ "P" ],
        "dateTime" : "2020-12-17T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48447
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05446500:00010:00003"
  }, {
    "sourceInfo" : {
      "siteName" : "GREEN RIVER NEAR GENESEO, IL",
      "siteCode" : [ {
        "value" : "05447500",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.48892309,
          "longitude" : -90.1576186
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07090007",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17073",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Maximum",
          "name" : "Statistic",
          "optionCode" : "00001"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "3.2",
        "qualifiers" : [ "P" ],
        "dateTime" : "2020-12-17T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48470
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05447500:00010:00001"
  }, {
    "sourceInfo" : {
      "siteName" : "GREEN RIVER NEAR GENESEO, IL",
      "siteCode" : [ {
        "value" : "05447500",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.48892309,
          "longitude" : -90.1576186
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07090007",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17073",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Minimum",
          "name" : "Statistic",
          "optionCode" : "00002"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "2.4",
        "qualifiers" : [ "P" ],
        "dateTime" : "2020-12-17T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48471
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05447500:00010:00002"
  }, {
    "sourceInfo" : {
      "siteName" : "GREEN RIVER NEAR GENESEO, IL",
      "siteCode" : [ {
        "value" : "05447500",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.48892309,
          "longitude" : -90.1576186
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07090007",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17073",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Mean",
          "name" : "Statistic",
          "optionCode" : "00003"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "2.9",
        "qualifiers" : [ "P" ],
        "dateTime" : "2020-12-17T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48472
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05447500:00010:00003"
  }, {
    "sourceInfo" : {
      "siteName" : "KANKAKEE RIVER AT CUSTER PARK, IL",
      "siteCode" : [ {
        "value" : "05527000",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.2461111,
          "longitude" : -88.1275
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120001",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17197",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Mean",
          "name" : "Statistic",
          "optionCode" : "00003"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "-0.3",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 246268
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05527000:00010:00003"
  }, {
    "sourceInfo" : {
      "siteName" : "KANKAKEE RIVER NEAR WILMINGTON, IL",
      "siteCode" : [ {
        "value" : "05527500",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.34669805,
          "longitude" : -88.1864487
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120001",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17197",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Maximum",
          "name" : "Statistic",
          "optionCode" : "00001"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "0.4",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48551
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05527500:00010:00001"
  }, {
    "sourceInfo" : {
      "siteName" : "KANKAKEE RIVER NEAR WILMINGTON, IL",
      "siteCode" : [ {
        "value" : "05527500",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.34669805,
          "longitude" : -88.1864487
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120001",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17197",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Minimum",
          "name" : "Statistic",
          "optionCode" : "00002"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "0.2",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48552
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05527500:00010:00002"
  }, {
    "sourceInfo" : {
      "siteName" : "KANKAKEE RIVER NEAR WILMINGTON, IL",
      "siteCode" : [ {
        "value" : "05527500",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.34669805,
          "longitude" : -88.1864487
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120001",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17197",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Mean",
          "name" : "Statistic",
          "optionCode" : "00003"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "0.3",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48553
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05527500:00010:00003"
  }, {
    "sourceInfo" : {
      "siteName" : "CHICAGO S & S CANAL AT WESTERN AVE AT CHICAGO, IL",
      "siteCode" : [ {
        "value" : "05536137",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.8375,
          "longitude" : -87.6852778
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120003",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17031",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Maximum",
          "name" : "Statistic",
          "optionCode" : "00001"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "0.7",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "TOP (2 FT)",
        "methodID" : 48660
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    }, {
      "value" : [ {
        "value" : "0.7",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "MIDDLE (6 FT)",
        "methodID" : 48663
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    }, {
      "value" : [ {
        "value" : "0.8",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "BOTTOM (10 FT)",
        "methodID" : 48666
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05536137:00010:00001"
  }, {
    "sourceInfo" : {
      "siteName" : "CHICAGO S & S CANAL AT WESTERN AVE AT CHICAGO, IL",
      "siteCode" : [ {
        "value" : "05536137",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.8375,
          "longitude" : -87.6852778
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120003",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17031",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Minimum",
          "name" : "Statistic",
          "optionCode" : "00002"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "0.4",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "TOP (2 FT)",
        "methodID" : 48661
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    }, {
      "value" : [ {
        "value" : "0.5",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "MIDDLE (6 FT)",
        "methodID" : 48664
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    }, {
      "value" : [ {
        "value" : "0.6",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "BOTTOM (10 FT)",
        "methodID" : 48667
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05536137:00010:00002"
  }, {
    "sourceInfo" : {
      "siteName" : "CHICAGO S & S CANAL AT WESTERN AVE AT CHICAGO, IL",
      "siteCode" : [ {
        "value" : "05536137",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.8375,
          "longitude" : -87.6852778
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120003",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17031",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Mean",
          "name" : "Statistic",
          "optionCode" : "00003"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "0.5",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "TOP (2 FT)",
        "methodID" : 48662
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    }, {
      "value" : [ {
        "value" : "0.6",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "MIDDLE (6 FT)",
        "methodID" : 48665
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    }, {
      "value" : [ {
        "value" : "0.7",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "BOTTOM (10 FT)",
        "methodID" : 48668
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05536137:00010:00003"
  }, {
    "sourceInfo" : {
      "siteName" : "CALUMET SAG CHANNEL NR RT 83 AT SAG BRIDGE, IL",
      "siteCode" : [ {
        "value" : "05536700",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.69638889,
          "longitude" : -87.9416667
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120004",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17031",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Maximum",
          "name" : "Statistic",
          "optionCode" : "00001"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "2.0",
        "qualifiers" : [ "P" ],
        "dateTime" : "2019-03-05T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "(TOP)",
        "methodID" : 48705
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    }, {
      "value" : [ {
        "value" : "2.3",
        "qualifiers" : [ "P" ],
        "dateTime" : "2019-03-05T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "(MIDDLE)",
        "methodID" : 48708
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    }, {
      "value" : [ {
        "value" : "2.2",
        "qualifiers" : [ "P" ],
        "dateTime" : "2019-03-05T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "(BOTTOM)",
        "methodID" : 48711
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05536700:00010:00001"
  }, {
    "sourceInfo" : {
      "siteName" : "CALUMET SAG CHANNEL NR RT 83 AT SAG BRIDGE, IL",
      "siteCode" : [ {
        "value" : "05536700",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.69638889,
          "longitude" : -87.9416667
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120004",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17031",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Minimum",
          "name" : "Statistic",
          "optionCode" : "00002"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "0.8",
        "qualifiers" : [ "P" ],
        "dateTime" : "2019-03-05T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "(TOP)",
        "methodID" : 48706
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    }, {
      "value" : [ {
        "value" : "1.2",
        "qualifiers" : [ "P" ],
        "dateTime" : "2019-03-05T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "(MIDDLE)",
        "methodID" : 48709
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    }, {
      "value" : [ {
        "value" : "1.0",
        "qualifiers" : [ "P" ],
        "dateTime" : "2019-03-05T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "(BOTTOM)",
        "methodID" : 48712
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05536700:00010:00002"
  }, {
    "sourceInfo" : {
      "siteName" : "CALUMET SAG CHANNEL NR RT 83 AT SAG BRIDGE, IL",
      "siteCode" : [ {
        "value" : "05536700",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.69638889,
          "longitude" : -87.9416667
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120004",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17031",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Mean",
          "name" : "Statistic",
          "optionCode" : "00003"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "1.5",
        "qualifiers" : [ "P" ],
        "dateTime" : "2019-03-05T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "(TOP)",
        "methodID" : 48707
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    }, {
      "value" : [ {
        "value" : "1.9",
        "qualifiers" : [ "P" ],
        "dateTime" : "2019-03-05T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "(MIDDLE)",
        "methodID" : 48710
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    }, {
      "value" : [ {
        "value" : "1.7",
        "qualifiers" : [ "P" ],
        "dateTime" : "2019-03-05T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "(BOTTOM)",
        "methodID" : 48713
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05536700:00010:00003"
  }, {
    "sourceInfo" : {
      "siteName" : "CHICAGO SANITARY AND SHIP CANAL AT ROMEOVILLE, IL",
      "siteCode" : [ {
        "value" : "05536995",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.6408333,
          "longitude" : -88.0594444
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120004",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17197",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Maximum",
          "name" : "Statistic",
          "optionCode" : "00001"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "2.9",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "P4",
        "methodID" : 173424
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    }, {
      "value" : [ {
        "value" : "3.7",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "P3",
        "methodID" : 174064
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    }, {
      "value" : [ {
        "value" : "3.0",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "P2",
        "methodID" : 174067
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05536995:00010:00001"
  }, {
    "sourceInfo" : {
      "siteName" : "CHICAGO SANITARY AND SHIP CANAL AT ROMEOVILLE, IL",
      "siteCode" : [ {
        "value" : "05536995",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.6408333,
          "longitude" : -88.0594444
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120004",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17197",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Minimum",
          "name" : "Statistic",
          "optionCode" : "00002"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "2.4",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "P4",
        "methodID" : 173425
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    }, {
      "value" : [ {
        "value" : "3.1",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "P3",
        "methodID" : 174065
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    }, {
      "value" : [ {
        "value" : "2.3",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "P2",
        "methodID" : 174068
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05536995:00010:00002"
  }, {
    "sourceInfo" : {
      "siteName" : "CHICAGO SANITARY AND SHIP CANAL AT ROMEOVILLE, IL",
      "siteCode" : [ {
        "value" : "05536995",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.6408333,
          "longitude" : -88.0594444
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120004",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17197",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Mean",
          "name" : "Statistic",
          "optionCode" : "00003"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "2.6",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "P4",
        "methodID" : 173426
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    }, {
      "value" : [ {
        "value" : "3.3",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "P3",
        "methodID" : 174066
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    }, {
      "value" : [ {
        "value" : "2.6",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "P2",
        "methodID" : 174069
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    }, {
      "value" : [ {
        "value" : "2.6",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "P1",
        "methodID" : 174070
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    }, {
      "value" : [ {
        "value" : "3.0",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "[7-day Moving Average]",
        "methodID" : 223016
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05536995:00010:00003"
  }, {
    "sourceInfo" : {
      "siteName" : "DES PLAINES RIVER AT ROUTE 53 AT JOLIET, IL",
      "siteCode" : [ {
        "value" : "05537980",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.53638889,
          "longitude" : -88.0825
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120004",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17197",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Maximum",
          "name" : "Statistic",
          "optionCode" : "00001"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "4.8",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 220127
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05537980:00010:00001"
  }, {
    "sourceInfo" : {
      "siteName" : "DES PLAINES RIVER AT ROUTE 53 AT JOLIET, IL",
      "siteCode" : [ {
        "value" : "05537980",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.53638889,
          "longitude" : -88.0825
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120004",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17197",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Minimum",
          "name" : "Statistic",
          "optionCode" : "00002"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "2.8",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 220125
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05537980:00010:00002"
  }, {
    "sourceInfo" : {
      "siteName" : "DES PLAINES RIVER AT ROUTE 53 AT JOLIET, IL",
      "siteCode" : [ {
        "value" : "05537980",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.53638889,
          "longitude" : -88.0825
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120004",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17197",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Mean",
          "name" : "Statistic",
          "optionCode" : "00003"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "3.6",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 220129
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05537980:00010:00003"
  }, {
    "sourceInfo" : {
      "siteName" : "DES PLAINES RIVER IN LOCK CHANNEL AT ROCKDALE, IL",
      "siteCode" : [ {
        "value" : "05538020",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.5,
          "longitude" : -88.1069444
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120004",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17197",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Maximum",
          "name" : "Statistic",
          "optionCode" : "00001"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "2.9",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-12T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48764
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05538020:00010:00001"
  }, {
    "sourceInfo" : {
      "siteName" : "DES PLAINES RIVER IN LOCK CHANNEL AT ROCKDALE, IL",
      "siteCode" : [ {
        "value" : "05538020",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.5,
          "longitude" : -88.1069444
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120004",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17197",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Minimum",
          "name" : "Statistic",
          "optionCode" : "00002"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "1.9",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-12T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48765
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05538020:00010:00002"
  }, {
    "sourceInfo" : {
      "siteName" : "DES PLAINES RIVER IN LOCK CHANNEL AT ROCKDALE, IL",
      "siteCode" : [ {
        "value" : "05538020",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.5,
          "longitude" : -88.1069444
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120004",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17197",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Mean",
          "name" : "Statistic",
          "optionCode" : "00003"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "2.4",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-12T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48766
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05538020:00010:00003"
  }, {
    "sourceInfo" : {
      "siteName" : "DES PLAINES RIVER AT CHANNAHON, IL",
      "siteCode" : [ {
        "value" : "05539670",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.41444444,
          "longitude" : -88.2144444
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120004",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17197",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Maximum",
          "name" : "Statistic",
          "optionCode" : "00001"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "1.8",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48794
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05539670:00010:00001"
  }, {
    "sourceInfo" : {
      "siteName" : "DES PLAINES RIVER AT CHANNAHON, IL",
      "siteCode" : [ {
        "value" : "05539670",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.41444444,
          "longitude" : -88.2144444
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120004",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17197",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Minimum",
          "name" : "Statistic",
          "optionCode" : "00002"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "1.1",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48795
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05539670:00010:00002"
  }, {
    "sourceInfo" : {
      "siteName" : "DES PLAINES RIVER AT CHANNAHON, IL",
      "siteCode" : [ {
        "value" : "05539670",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.41444444,
          "longitude" : -88.2144444
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120004",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17197",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Mean",
          "name" : "Statistic",
          "optionCode" : "00003"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "1.4",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48796
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05539670:00010:00003"
  }, {
    "sourceInfo" : {
      "siteName" : "ILLINOIS RIVER AT SENECA, IL",
      "siteCode" : [ {
        "value" : "05543010",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.2997222,
          "longitude" : -88.6141667
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120005",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17099",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Maximum",
          "name" : "Statistic",
          "optionCode" : "00001"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "5.6",
        "qualifiers" : [ "A" ],
        "dateTime" : "2020-12-11T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "A",
        "qualifierDescription" : "Approved for publication -- Processing and review completed.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48832
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05543010:00010:00001"
  }, {
    "sourceInfo" : {
      "siteName" : "ILLINOIS RIVER AT SENECA, IL",
      "siteCode" : [ {
        "value" : "05543010",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.2997222,
          "longitude" : -88.6141667
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120005",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17099",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Minimum",
          "name" : "Statistic",
          "optionCode" : "00002"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "5.4",
        "qualifiers" : [ "A" ],
        "dateTime" : "2020-12-11T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "A",
        "qualifierDescription" : "Approved for publication -- Processing and review completed.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48833
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05543010:00010:00002"
  }, {
    "sourceInfo" : {
      "siteName" : "ILLINOIS RIVER AT SENECA, IL",
      "siteCode" : [ {
        "value" : "05543010",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.2997222,
          "longitude" : -88.6141667
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120005",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17099",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Mean",
          "name" : "Statistic",
          "optionCode" : "00003"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "5.5",
        "qualifiers" : [ "A" ],
        "dateTime" : "2020-12-11T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "A",
        "qualifierDescription" : "Approved for publication -- Processing and review completed.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48834
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05543010:00010:00003"
  }, {
    "sourceInfo" : {
      "siteName" : "FOX RIVER NEAR MCHENRY, IL",
      "siteCode" : [ {
        "value" : "05549500",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 42.3100222,
          "longitude" : -88.2514745
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120006",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17111",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Maximum",
          "name" : "Statistic",
          "optionCode" : "00001"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "10.2",
        "qualifiers" : [ "A" ],
        "dateTime" : "2020-10-21T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "A",
        "qualifierDescription" : "Approved for publication -- Processing and review completed.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 239791
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05549500:00010:00001"
  }, {
    "sourceInfo" : {
      "siteName" : "FOX RIVER NEAR MCHENRY, IL",
      "siteCode" : [ {
        "value" : "05549500",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 42.3100222,
          "longitude" : -88.2514745
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120006",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17111",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Minimum",
          "name" : "Statistic",
          "optionCode" : "00002"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "9.2",
        "qualifiers" : [ "A" ],
        "dateTime" : "2020-10-21T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "A",
        "qualifierDescription" : "Approved for publication -- Processing and review completed.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 239793
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05549500:00010:00002"
  }, {
    "sourceInfo" : {
      "siteName" : "FOX RIVER NEAR MCHENRY, IL",
      "siteCode" : [ {
        "value" : "05549500",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 42.3100222,
          "longitude" : -88.2514745
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120006",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17111",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Mean",
          "name" : "Statistic",
          "optionCode" : "00003"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "9.7",
        "qualifiers" : [ "A" ],
        "dateTime" : "2020-10-21T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "A",
        "qualifierDescription" : "Approved for publication -- Processing and review completed.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 239790
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05549500:00010:00003"
  }, {
    "sourceInfo" : {
      "siteName" : "FOX RIVER (TAILWATER) AT ALGONQUIN, IL",
      "siteCode" : [ {
        "value" : "05550001",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 42.16194444,
          "longitude" : -88.29388889
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120006",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17111",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Maximum",
          "name" : "Statistic",
          "optionCode" : "00001"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "-999999",
        "qualifiers" : [ "P", "Eqp" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "Eqp",
        "qualifierDescription" : "Value affected by equipment malfunction.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      }, {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 1,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48902
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05550001:00010:00001"
  }, {
    "sourceInfo" : {
      "siteName" : "FOX RIVER (TAILWATER) AT ALGONQUIN, IL",
      "siteCode" : [ {
        "value" : "05550001",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 42.16194444,
          "longitude" : -88.29388889
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120006",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17111",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Minimum",
          "name" : "Statistic",
          "optionCode" : "00002"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "-999999",
        "qualifiers" : [ "P", "Eqp" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "Eqp",
        "qualifierDescription" : "Value affected by equipment malfunction.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      }, {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 1,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48903
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05550001:00010:00002"
  }, {
    "sourceInfo" : {
      "siteName" : "FOX RIVER (TAILWATER) AT ALGONQUIN, IL",
      "siteCode" : [ {
        "value" : "05550001",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 42.16194444,
          "longitude" : -88.29388889
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120006",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17111",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Mean",
          "name" : "Statistic",
          "optionCode" : "00003"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "-999999",
        "qualifiers" : [ "P", "Dis" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "Dis",
        "qualifierDescription" : "Record has been discontinued at the measurement site.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      }, {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 1,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48904
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05550001:00010:00003"
  }, {
    "sourceInfo" : {
      "siteName" : "FOX RIVER AT YORKVILLE, IL",
      "siteCode" : [ {
        "value" : "05551580",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.64277778,
          "longitude" : -88.4433333
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120007",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17093",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Maximum",
          "name" : "Statistic",
          "optionCode" : "00001"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "10.6",
        "qualifiers" : [ "A" ],
        "dateTime" : "2016-11-14T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "A",
        "qualifierDescription" : "Approved for publication -- Processing and review completed.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48943
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05551580:00010:00001"
  }, {
    "sourceInfo" : {
      "siteName" : "FOX RIVER AT YORKVILLE, IL",
      "siteCode" : [ {
        "value" : "05551580",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.64277778,
          "longitude" : -88.4433333
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120007",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17093",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Minimum",
          "name" : "Statistic",
          "optionCode" : "00002"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "8.3",
        "qualifiers" : [ "A" ],
        "dateTime" : "2016-11-14T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "A",
        "qualifierDescription" : "Approved for publication -- Processing and review completed.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48944
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05551580:00010:00002"
  }, {
    "sourceInfo" : {
      "siteName" : "FOX RIVER AT YORKVILLE, IL",
      "siteCode" : [ {
        "value" : "05551580",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.64277778,
          "longitude" : -88.4433333
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120007",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17093",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Mean",
          "name" : "Statistic",
          "optionCode" : "00003"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "9.2",
        "qualifiers" : [ "A" ],
        "dateTime" : "2016-11-14T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "A",
        "qualifierDescription" : "Approved for publication -- Processing and review completed.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 48945
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05551580:00010:00003"
  }, {
    "sourceInfo" : {
      "siteName" : "SALT CREEK NEAR FARMER CITY, IL",
      "siteCode" : [ {
        "value" : "05578100",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 40.22777778,
          "longitude" : -88.6605556
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07130009",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17039",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Maximum",
          "name" : "Statistic",
          "optionCode" : "00001"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "-0.2",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-01T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 49159
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05578100:00010:00001"
  }, {
    "sourceInfo" : {
      "siteName" : "SALT CREEK NEAR FARMER CITY, IL",
      "siteCode" : [ {
        "value" : "05578100",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 40.22777778,
          "longitude" : -88.6605556
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07130009",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17039",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Minimum",
          "name" : "Statistic",
          "optionCode" : "00002"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "-0.3",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-01T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 49160
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05578100:00010:00002"
  }, {
    "sourceInfo" : {
      "siteName" : "SALT CREEK NEAR FARMER CITY, IL",
      "siteCode" : [ {
        "value" : "05578100",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 40.22777778,
          "longitude" : -88.6605556
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07130009",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17039",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Mean",
          "name" : "Statistic",
          "optionCode" : "00003"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "-0.3",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-01T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 49161
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05578100:00010:00003"
  }, {
    "sourceInfo" : {
      "siteName" : "NORTH FORK SALT CREEK NEAR DE WITT, IL",
      "siteCode" : [ {
        "value" : "05578250",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 40.23527778,
          "longitude" : -88.8097222
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07130009",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17039",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Maximum",
          "name" : "Statistic",
          "optionCode" : "00001"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "-0.2",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 49168
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05578250:00010:00001"
  }, {
    "sourceInfo" : {
      "siteName" : "NORTH FORK SALT CREEK NEAR DE WITT, IL",
      "siteCode" : [ {
        "value" : "05578250",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 40.23527778,
          "longitude" : -88.8097222
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07130009",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17039",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Minimum",
          "name" : "Statistic",
          "optionCode" : "00002"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "-0.3",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 49169
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05578250:00010:00002"
  }, {
    "sourceInfo" : {
      "siteName" : "NORTH FORK SALT CREEK NEAR DE WITT, IL",
      "siteCode" : [ {
        "value" : "05578250",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 40.23527778,
          "longitude" : -88.8097222
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07130009",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17039",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Mean",
          "name" : "Statistic",
          "optionCode" : "00003"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "-0.2",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 49170
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05578250:00010:00003"
  }, {
    "sourceInfo" : {
      "siteName" : "ILLINOIS RIVER AT FLORENCE, IL",
      "siteCode" : [ {
        "value" : "05586300",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 39.63277778,
          "longitude" : -90.6077778
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07130011",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17149",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Maximum",
          "name" : "Statistic",
          "optionCode" : "00001"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "0.0",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 220128
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05586300:00010:00001"
  }, {
    "sourceInfo" : {
      "siteName" : "ILLINOIS RIVER AT FLORENCE, IL",
      "siteCode" : [ {
        "value" : "05586300",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 39.63277778,
          "longitude" : -90.6077778
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07130011",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17149",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Minimum",
          "name" : "Statistic",
          "optionCode" : "00002"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "-0.0",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 220126
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05586300:00010:00002"
  }, {
    "sourceInfo" : {
      "siteName" : "ILLINOIS RIVER AT FLORENCE, IL",
      "siteCode" : [ {
        "value" : "05586300",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 39.63277778,
          "longitude" : -90.6077778
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07130011",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17149",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Mean",
          "name" : "Statistic",
          "optionCode" : "00003"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "-0.0",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 49326
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05586300:00010:00003"
  }, {
    "sourceInfo" : {
      "siteName" : "KASKASKIA RIVER NEAR VENEDY STATION, IL",
      "siteCode" : [ {
        "value" : "05594100",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 38.45060486,
          "longitude" : -89.6275926
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07140204",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17189",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Random Instantaneous Values",
          "name" : "Statistic",
          "optionCode" : "00011"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "18.5",
        "qualifiers" : [ "A" ],
        "dateTime" : "1981-09-29T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "A",
        "qualifierDescription" : "Approved for publication -- Processing and review completed.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 49431
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05594100:00010:00011"
  }, {
    "sourceInfo" : {
      "siteName" : "KASKASKIA RIVER AT NEW ATHENS, IL",
      "siteCode" : [ {
        "value" : "05595000",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 38.3197222,
          "longitude" : -89.8886111
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07140204",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17163",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Maximum",
          "name" : "Statistic",
          "optionCode" : "00001"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "0.0",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 49445
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05595000:00010:00001"
  }, {
    "sourceInfo" : {
      "siteName" : "KASKASKIA RIVER AT NEW ATHENS, IL",
      "siteCode" : [ {
        "value" : "05595000",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 38.3197222,
          "longitude" : -89.8886111
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07140204",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17163",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Minimum",
          "name" : "Statistic",
          "optionCode" : "00002"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "-0.0",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 232566
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05595000:00010:00002"
  }, {
    "sourceInfo" : {
      "siteName" : "KASKASKIA RIVER AT NEW ATHENS, IL",
      "siteCode" : [ {
        "value" : "05595000",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 38.3197222,
          "longitude" : -89.8886111
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07140204",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17163",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Mean",
          "name" : "Statistic",
          "optionCode" : "00003"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "-0.0",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 49447
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05595000:00010:00003"
  }, {
    "sourceInfo" : {
      "siteName" : "BIG MUDDY RIVER AT RTE 127 AT MURPHYSBORO, IL",
      "siteCode" : [ {
        "value" : "05599490",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 37.7583333,
          "longitude" : -89.3277778
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07140106",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17077",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Maximum",
          "name" : "Statistic",
          "optionCode" : "00001"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "0.4",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 49506
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05599490:00010:00001"
  }, {
    "sourceInfo" : {
      "siteName" : "BIG MUDDY RIVER AT RTE 127 AT MURPHYSBORO, IL",
      "siteCode" : [ {
        "value" : "05599490",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 37.7583333,
          "longitude" : -89.3277778
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07140106",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17077",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Minimum",
          "name" : "Statistic",
          "optionCode" : "00002"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "-0.0",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 49507
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05599490:00010:00002"
  }, {
    "sourceInfo" : {
      "siteName" : "BIG MUDDY RIVER AT RTE 127 AT MURPHYSBORO, IL",
      "siteCode" : [ {
        "value" : "05599490",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 37.7583333,
          "longitude" : -89.3277778
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07140106",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17077",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Mean",
          "name" : "Statistic",
          "optionCode" : "00003"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "0.1",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 49508
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:05599490:00010:00003"
  }, {
    "sourceInfo" : {
      "siteName" : "HANSON GRAVEL PIT AT CULVERT NEAR MORRIS, IL",
      "siteCode" : [ {
        "value" : "411955088280601",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.33305556,
          "longitude" : -88.4669444
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120005",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17063",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Maximum",
          "name" : "Statistic",
          "optionCode" : "00001"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "5.5",
        "qualifiers" : [ "A" ],
        "dateTime" : "2020-12-09T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "A",
        "qualifierDescription" : "Approved for publication -- Processing and review completed.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 49618
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:411955088280601:00010:00001"
  }, {
    "sourceInfo" : {
      "siteName" : "HANSON GRAVEL PIT AT CULVERT NEAR MORRIS, IL",
      "siteCode" : [ {
        "value" : "411955088280601",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.33305556,
          "longitude" : -88.4669444
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120005",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17063",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Minimum",
          "name" : "Statistic",
          "optionCode" : "00002"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "2.7",
        "qualifiers" : [ "A" ],
        "dateTime" : "2020-12-09T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "A",
        "qualifierDescription" : "Approved for publication -- Processing and review completed.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 49619
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:411955088280601:00010:00002"
  }, {
    "sourceInfo" : {
      "siteName" : "HANSON GRAVEL PIT AT CULVERT NEAR MORRIS, IL",
      "siteCode" : [ {
        "value" : "411955088280601",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.33305556,
          "longitude" : -88.4669444
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120005",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17063",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Mean",
          "name" : "Statistic",
          "optionCode" : "00003"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "3.6",
        "qualifiers" : [ "A" ],
        "dateTime" : "2020-12-09T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "A",
        "qualifierDescription" : "Approved for publication -- Processing and review completed.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 49620
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:411955088280601:00010:00003"
  }, {
    "sourceInfo" : {
      "siteName" : "KANKAKEE R AT INFLOW OF POWER PLANT NR LORENZO, IL",
      "siteCode" : [ {
        "value" : "412320088154101",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.38888889,
          "longitude" : -88.26138889
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120001",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17063",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Maximum",
          "name" : "Statistic",
          "optionCode" : "00001"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "0.9",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 49632
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:412320088154101:00010:00001"
  }, {
    "sourceInfo" : {
      "siteName" : "KANKAKEE R AT INFLOW OF POWER PLANT NR LORENZO, IL",
      "siteCode" : [ {
        "value" : "412320088154101",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.38888889,
          "longitude" : -88.26138889
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120001",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17063",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Minimum",
          "name" : "Statistic",
          "optionCode" : "00002"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "0.5",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 49633
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:412320088154101:00010:00002"
  }, {
    "sourceInfo" : {
      "siteName" : "KANKAKEE R AT INFLOW OF POWER PLANT NR LORENZO, IL",
      "siteCode" : [ {
        "value" : "412320088154101",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 41.38888889,
          "longitude" : -88.26138889
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "ST",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120001",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17063",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Mean",
          "name" : "Statistic",
          "optionCode" : "00003"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "0.6",
        "qualifiers" : [ "P" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 49634
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:412320088154101:00010:00003"
  }, {
    "sourceInfo" : {
      "siteName" : "43N5E-27.4h1 (14-RIL-S)",
      "siteCode" : [ {
        "value" : "421056088380801",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 42.1822222,
          "longitude" : -88.6355556
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "GW",
        "name" : "siteTypeCd"
      }, {
        "value" : "07090006",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17111",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Maximum",
          "name" : "Statistic",
          "optionCode" : "00001"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "11.4",
        "qualifiers" : [ "A" ],
        "dateTime" : "2017-01-09T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "A",
        "qualifierDescription" : "Approved for publication -- Processing and review completed.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 49782
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:421056088380801:00010:00001"
  }, {
    "sourceInfo" : {
      "siteName" : "43N5E-27.4h1 (14-RIL-S)",
      "siteCode" : [ {
        "value" : "421056088380801",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 42.1822222,
          "longitude" : -88.6355556
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "GW",
        "name" : "siteTypeCd"
      }, {
        "value" : "07090006",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17111",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Minimum",
          "name" : "Statistic",
          "optionCode" : "00002"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "11.2",
        "qualifiers" : [ "A" ],
        "dateTime" : "2017-01-09T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "A",
        "qualifierDescription" : "Approved for publication -- Processing and review completed.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 49783
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:421056088380801:00010:00002"
  }, {
    "sourceInfo" : {
      "siteName" : "43N5E-27.4h1 (14-RIL-S)",
      "siteCode" : [ {
        "value" : "421056088380801",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 42.1822222,
          "longitude" : -88.6355556
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "GW",
        "name" : "siteTypeCd"
      }, {
        "value" : "07090006",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17111",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Mean",
          "name" : "Statistic",
          "optionCode" : "00003"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "11.6",
        "qualifiers" : [ "A" ],
        "dateTime" : "2017-01-02T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "A",
        "qualifierDescription" : "Approved for publication -- Processing and review completed.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 49784
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:421056088380801:00010:00003"
  }, {
    "sourceInfo" : {
      "siteName" : "44N5E-30.8c1 (10-MAR-S) (McHenry Co CRN)",
      "siteCode" : [ {
        "value" : "421533088421801",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 42.25916667,
          "longitude" : -88.705
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "GW",
        "name" : "siteTypeCd"
      }, {
        "value" : "07090006",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17111",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Maximum",
          "name" : "Statistic",
          "optionCode" : "00001"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "8.3",
        "qualifiers" : [ "A" ],
        "dateTime" : "2017-03-20T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "A",
        "qualifierDescription" : "Approved for publication -- Processing and review completed.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 49802
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:421533088421801:00010:00001"
  }, {
    "sourceInfo" : {
      "siteName" : "44N5E-30.8c1 (10-MAR-S) (McHenry Co CRN)",
      "siteCode" : [ {
        "value" : "421533088421801",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 42.25916667,
          "longitude" : -88.705
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "GW",
        "name" : "siteTypeCd"
      }, {
        "value" : "07090006",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17111",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Minimum",
          "name" : "Statistic",
          "optionCode" : "00002"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "7.8",
        "qualifiers" : [ "A" ],
        "dateTime" : "2017-03-20T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "A",
        "qualifierDescription" : "Approved for publication -- Processing and review completed.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 49803
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:421533088421801:00010:00002"
  }, {
    "sourceInfo" : {
      "siteName" : "44N5E-30.8c1 (10-MAR-S) (McHenry Co CRN)",
      "siteCode" : [ {
        "value" : "421533088421801",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 42.25916667,
          "longitude" : -88.705
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "GW",
        "name" : "siteTypeCd"
      }, {
        "value" : "07090006",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17111",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Mean",
          "name" : "Statistic",
          "optionCode" : "00003"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "8.0",
        "qualifiers" : [ "A" ],
        "dateTime" : "2017-03-20T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "A",
        "qualifierDescription" : "Approved for publication -- Processing and review completed.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 49804
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:421533088421801:00010:00003"
  }, {
    "sourceInfo" : {
      "siteName" : "44N9E-20.7c",
      "siteCode" : [ {
        "value" : "421633088125801",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 42.2760833,
          "longitude" : -88.2163333
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "GW",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120006",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17111",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Maximum",
          "name" : "Statistic",
          "optionCode" : "00001"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "12.3",
        "qualifiers" : [ "A" ],
        "dateTime" : "2016-04-12T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "A",
        "qualifierDescription" : "Approved for publication -- Processing and review completed.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 49812
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:421633088125801:00010:00001"
  }, {
    "sourceInfo" : {
      "siteName" : "44N9E-20.7c",
      "siteCode" : [ {
        "value" : "421633088125801",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 42.2760833,
          "longitude" : -88.2163333
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "GW",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120006",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17111",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Minimum",
          "name" : "Statistic",
          "optionCode" : "00002"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "12.2",
        "qualifiers" : [ "A" ],
        "dateTime" : "2016-04-12T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "A",
        "qualifierDescription" : "Approved for publication -- Processing and review completed.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 49813
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:421633088125801:00010:00002"
  }, {
    "sourceInfo" : {
      "siteName" : "44N9E-20.7c",
      "siteCode" : [ {
        "value" : "421633088125801",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 42.2760833,
          "longitude" : -88.2163333
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "GW",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120006",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17111",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Mean",
          "name" : "Statistic",
          "optionCode" : "00003"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "12.2",
        "qualifiers" : [ "A" ],
        "dateTime" : "2016-04-12T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "A",
        "qualifierDescription" : "Approved for publication -- Processing and review completed.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 49814
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:421633088125801:00010:00003"
  }, {
    "sourceInfo" : {
      "siteName" : "45N8E-17.7h1 (9-MCH-S)",
      "siteCode" : [ {
        "value" : "422308088195601",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 42.38555556,
          "longitude" : -88.3322222
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "GW",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120006",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17111",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Maximum",
          "name" : "Statistic",
          "optionCode" : "00001"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "-999999",
        "qualifiers" : [ "P", "Dis" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "Dis",
        "qualifierDescription" : "Record has been discontinued at the measurement site.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      }, {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 1,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 49832
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:422308088195601:00010:00001"
  }, {
    "sourceInfo" : {
      "siteName" : "45N8E-17.7h1 (9-MCH-S)",
      "siteCode" : [ {
        "value" : "422308088195601",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 42.38555556,
          "longitude" : -88.3322222
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "GW",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120006",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17111",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Minimum",
          "name" : "Statistic",
          "optionCode" : "00002"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "-999999",
        "qualifiers" : [ "P", "Dis" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "Dis",
        "qualifierDescription" : "Record has been discontinued at the measurement site.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      }, {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 1,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 49833
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:422308088195601:00010:00002"
  }, {
    "sourceInfo" : {
      "siteName" : "45N8E-17.7h1 (9-MCH-S)",
      "siteCode" : [ {
        "value" : "422308088195601",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 42.38555556,
          "longitude" : -88.3322222
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "GW",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120006",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17111",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Mean",
          "name" : "Statistic",
          "optionCode" : "00003"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "-999999",
        "qualifiers" : [ "P", "Dis" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "Dis",
        "qualifierDescription" : "Record has been discontinued at the measurement site.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      }, {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 1,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 49834
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:422308088195601:00010:00003"
  }, {
    "sourceInfo" : {
      "siteName" : "46N8E-08.2e1 (4-RCH-S)",
      "siteCode" : [ {
        "value" : "422848088191001",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 42.48,
          "longitude" : -88.3194444
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "GW",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120006",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17111",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Maximum",
          "name" : "Statistic",
          "optionCode" : "00001"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "-999999",
        "qualifiers" : [ "P", "Dis" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "Dis",
        "qualifierDescription" : "Record has been discontinued at the measurement site.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      }, {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 1,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 49855
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:422848088191001:00010:00001"
  }, {
    "sourceInfo" : {
      "siteName" : "46N8E-08.2e1 (4-RCH-S)",
      "siteCode" : [ {
        "value" : "422848088191001",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 42.48,
          "longitude" : -88.3194444
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "GW",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120006",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17111",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Minimum",
          "name" : "Statistic",
          "optionCode" : "00002"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "-999999",
        "qualifiers" : [ "P", "Dis" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "Dis",
        "qualifierDescription" : "Record has been discontinued at the measurement site.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      }, {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 1,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 49856
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:422848088191001:00010:00002"
  }, {
    "sourceInfo" : {
      "siteName" : "46N8E-08.2e1 (4-RCH-S)",
      "siteCode" : [ {
        "value" : "422848088191001",
        "network" : "NWIS",
        "agencyCode" : "USGS"
      } ],
      "timeZoneInfo" : {
        "defaultTimeZone" : {
          "zoneOffset" : "-06:00",
          "zoneAbbreviation" : "CST"
        },
        "daylightSavingsTimeZone" : {
          "zoneOffset" : "-05:00",
          "zoneAbbreviation" : "CDT"
        },
        "siteUsesDaylightSavingsTime" : false
      },
      "geoLocation" : {
        "geogLocation" : {
          "srs" : "EPSG:4326",
          "latitude" : 42.48,
          "longitude" : -88.3194444
        },
        "localSiteXY" : [ ]
      },
      "note" : [ ],
      "siteType" : [ ],
      "siteProperty" : [ {
        "value" : "GW",
        "name" : "siteTypeCd"
      }, {
        "value" : "07120006",
        "name" : "hucCd"
      }, {
        "value" : "17",
        "name" : "stateCd"
      }, {
        "value" : "17111",
        "name" : "countyCd"
      } ]
    },
    "variable" : {
      "variableCode" : [ {
        "value" : "00010",
        "network" : "NWIS",
        "vocabulary" : "NWIS:UnitValues",
        "variableID" : 45807042,
        "default" : true
      } ],
      "variableName" : "Temperature, water, &#176;C",
      "variableDescription" : "Temperature, water, degrees Celsius",
      "valueType" : "Derived Value",
      "unit" : {
        "unitCode" : "deg C"
      },
      "options" : {
        "option" : [ {
          "value" : "Mean",
          "name" : "Statistic",
          "optionCode" : "00003"
        } ]
      },
      "note" : [ ],
      "noDataValue" : -999999.0,
      "variableProperty" : [ ],
      "oid" : "45807042"
    },
    "values" : [ {
      "value" : [ {
        "value" : "-999999",
        "qualifiers" : [ "P", "Dis" ],
        "dateTime" : "2021-02-13T00:00:00.000"
      } ],
      "qualifier" : [ {
        "qualifierCode" : "Dis",
        "qualifierDescription" : "Record has been discontinued at the measurement site.",
        "qualifierID" : 0,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      }, {
        "qualifierCode" : "P",
        "qualifierDescription" : "Provisional data subject to revision.",
        "qualifierID" : 1,
        "network" : "NWIS",
        "vocabulary" : "uv_rmk_cd"
      } ],
      "qualityControlLevel" : [ ],
      "method" : [ {
        "methodDescription" : "",
        "methodID" : 49857
      } ],
      "source" : [ ],
      "offset" : [ ],
      "sample" : [ ],
      "censorCode" : [ ]
    } ],
    "name" : "USGS:422848088191001:00010:00003"
  } ]
},
"nil" : false,
"globalScope" : true,
"typeSubstituted" : false
}