const fetchCoin = require('./indodax')

const {Coin} = require('../models')
let eth = {}
let etc = {}
let zec = {}
let rvn = {}

function coinUpdater() {
  fetchCoin()
  .then(result=> {
    eth = {
      volume: result.data.tickers.eth_idr.vol_eth,
      price: result.data.tickers.eth_idr.last
    }
    etc = {
      volume: result.data.tickers.etc_idr.vol_etc,
      price: result.data.tickers.etc_idr.last
    }
    zec = {
      volume: result.data.tickers.zec_idr.vol_zec,
      price: result.data.tickers.zec_idr.last
    }
    rvn = {
      volume: result.data.tickers.rvn_idr.vol_rvn,
      price: result.data.tickers.rvn_idr.last
    }
    return Coin.update(eth,{where:{name:'ETH'}})
  })
  .then(result=>{
    return Coin.update(etc,{where:{name:'ETC'}})
  })
  .then(result=>{
    return Coin.update(zec,{where:{name:'ZEC'}})
  })
  .then(result=>{
    return Coin.update(rvn,{where:{name:'RVN'}})
  })
  .catch(err=>{
    console.log(err);
  })
}

module.exports = coinUpdater