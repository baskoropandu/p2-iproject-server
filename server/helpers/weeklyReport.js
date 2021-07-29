require('dotenv').config()
const {Miner} = require('../models')
const miner = require('../models/miner')
function sendEmail(data){
  let username = data.username
  let email = data.email
  let coin = data.coin
  let coinPrice = data.coinPrice
  let unpaidBalance = data.unpaidBalance/10000000000000000
  const mailjet = require ('node-mailjet')
  .connect(process.env.MAILJET_USERNAME, process.env.MAILJET_PASSWORD)
  const request = mailjet
  .post("send", {'version': 'v3.1'})
  .request({
    "Messages":[
      {
        "From": {
          "Email": "baskoro.pandu.g@gmail.com",
          "Name": "IndoMiners"
        },
        "To": [
          {
            "Email": `${email}`,
            "Name": `${username}`
          }
        ],
        "Subject": `Your ${coin} Miner Weekly Report`,
        "TextPart": "",
        "HTMLPart": `
          <h3>dear ${username}, these are your weekly report for your ${coin} Miner.</h3>
          <ul>
            <li>
            <p>unpaid Balance: ${unpaidBalance}${coin} </p>
            </li>
            <li>
            <p>Coin Price: ${coinPrice} </p>
            </li>
            <li>
            <p> total worth: RP ${coinPrice * unpaidBalance} </p>
            </li>
          </ul>
        `,
        "CustomID": ""
      }
    ]
  })
  request
    .then((result) => {
      console.log(result.body)
    })
    .catch((err) => {
      console.log(err.statusCode)
    })
}

function weeklyReport() {
  Miner
    .findAll({
      include:['Coin','User','MinerLogs']
    })
    .then(result=> {
      result.forEach(miner => {
        let weeklyReport = {
          username: miner.User.username,
          email: miner.User.email,
          coin : miner.Coin.name,
          coinPrice: miner.Coin.price,
          unpaidBalance: miner.unpaidBalance
        }
        sendEmail(weeklyReport)
      });
      console.log('===weekly email sent===');
    })
    .catch(err =>{
      console.log(err);
    })
}

module.exports = weeklyReport