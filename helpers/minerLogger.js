const fetchMinerData = require('./ethermine')
const {Miner, MinerLog} = require('../models')


function minerLogger(){
  Miner.findAll()
  .then(result => {
    if(result.length > 0){
      result.forEach(mine => {
        let id = mine.id
        let wallet = mine.wallet
        let coin = mine.CoinId
        fetchMinerData(wallet,coin)
        .then(result=>{
          let currentHashrate = result.data.data.currentHashrate
          let newLog = {
            MinerId: id,
            hashrate: currentHashrate
          }
          MinerLog.create(newLog)
          .then(result =>{
            console.log(`===new data for wallet ${wallet} has been created===`);
          })
          .catch(err =>{
            console.log(err);
          })
        })
      });
    }
  })
}
module.exports = minerLogger