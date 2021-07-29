const fetchMinerData = require('../helpers/ethermine')
const {Miner, MinerLog} = require('../models')

class MinerController{
  static add(req,res){

    let newMiner = {
      UserId: req.user.id,
      wallet: req.body.wallet,
      CoinId: +req.body.CoinId,
      unpaidBalance: 0
    }

    fetchMinerData(newMiner.wallet, newMiner.CoinId)
      .then(result =>{
        newMiner.unpaidBalance = result.data.data.unpaid
        return Miner.create(newMiner)
      })
      .then(result=>{
        console.log(result);
      })
      .catch(err => console.log(err))
  }
  static getMyMiners(req,res){
    let UserId = req.user.id

    Miner
      .findAll({
        where: {
          UserId
        },
        include: ['MinerLogs','Coin']
      })
      .then(result => {
        res.status(200).json(result)
      })
      .catch(err => {
        res.status(500).json({error: err})
      })
  }
}

module.exports = MinerController