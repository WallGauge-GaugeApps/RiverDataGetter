const RData = require('./riverDataGetter');
const actObj = require('./actObj.json');

const rData = new RData();

rData.getCurrentData(["05586300", "05587498", "05587060", "385205090090501", "390019090412801", "05543010"])
    .then(()=>{
        console.log('call results:')
        console.dir(rData.dataObj.current, { depth: null });
        return rData.getDailyData(["05586300"])
    })
    .then(() => {
        console.dir(rData.dataObj.daily, { depth: null });
        return rData.getForecast('GRFI2')
    })
    .then(() => {
        return rData.getForecast('ALNI2')
    })
    .then(() => {
        return rData.getForecast('PIAI2')
    })
    .then(() => {
        console.log('Forecast data = ');
        console.dir(rData.dataObj.forecast, { depth: null });
    })
    .catch((err) => {
        console.error(err);
    })



