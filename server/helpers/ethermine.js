const axios = require('axios')

const pandu = `0x34393cd6af465a071d86ba3fc612a9946ce045fd`
const yusril = `0xf59e62a363dfba43dd94b69f31013ebf573759db`


function fetchMinerData(address, CoinId){
  switch (CoinId) {
    case 1:
      return axios.get(`https://api.ethermine.org/miner/${address}/currentStats`)
      break;
    case 2:
      return axios.get(`https://api-etc.ethermine.org/miner/${address}/currentStats`)
      
      break;
    case 3:
      return axios.get(`https://api-zcash.ethermine.org/miner/${address}/currentStats`)
      break;
    case 4:
      return axios.get(`https://api-ravencoin.ethermine.org/miner/${address}/currentStats`)
      break;
  }
}


module.exports =  fetchMinerData 