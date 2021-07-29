const router = require('express').Router()
const MinerController = require('../controllers/miners')
router.get('/', MinerController.getMyMiners)
router.post('/', MinerController.add)


module.exports = router