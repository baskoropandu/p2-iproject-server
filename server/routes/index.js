const router = require('express').Router()
const coin = require('./Coin')
const Miner = require('./Miner')

const UserController = require('../controllers/user')
const authenticate = require('../middlewares/authenticate')

router.post('/login', UserController.login)
router.post('/register', UserController.register)

router.use('/coins', coin)

router.use(authenticate)

router.use('/miners', Miner)



module.exports = router