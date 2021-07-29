const router = require('express').Router()
const CoinController = require('../controllers/coin')
router.get('/',CoinController.getAll)
router.get('/:id', CoinController.getOne)

module.exports = router