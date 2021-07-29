const { default: axios } = require("axios");

function fetchCoin(){
  return axios.get('https://indodax.com/api/tickers')
}

module.exports = fetchCoin