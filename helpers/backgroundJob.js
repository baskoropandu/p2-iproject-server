const cron = require('node-cron')
const coinUpdater = require('./coinUpdater')
const minerLogger = require('./minerLogger')
const weeklyReport = require('./weeklyReport')
const ethWallet = `0x34393cd6af465a071d86ba3fc612a9946ce045fd`
const etcWallet = `0xf59e62a363dfba43dd94b69f31013ebf573759db`

const updater = cron.schedule(`*/10 * * * *`, ()=>{
  //update data harga coin dan logging hashrate miner tiap jam pada menit ke-0
  coinUpdater()
  minerLogger()
})

const reporter = cron.schedule(`59 23 * * 7`,()=>{
  weeklyReport()
})

module.exports = {updater, reporter}
