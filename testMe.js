const RData = require('./riverDataGetter');
const actObj = require('./actObj.json');


const rData = new RData();

rData.getInstantData(["05587450", "05587498", "05587060", "385205090090501", "390019090412801"])
.then(()=>{

    console.log('call results:')
    console.dir(rData.dataObj, {depth:null});
})



