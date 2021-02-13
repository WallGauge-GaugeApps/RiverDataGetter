let x = {
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
            options: { option: [ { name: 'Statistic', optionCode: '00000' } ] },
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
                  qualifiers: [ 'P' ],
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
              method: [ { methodDescription: '', methodID: 231787 } ],
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
            options: { option: [ { name: 'Statistic', optionCode: '00000' } ] },
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
                  qualifiers: [ 'P' ],
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
              method: [ { methodDescription: '', methodID: 76827 } ],
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
            options: { option: [ { name: 'Statistic', optionCode: '00000' } ] },
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
                  qualifiers: [ 'P' ],
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
              method: [ { methodDescription: '', methodID: 76831 } ],
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
  