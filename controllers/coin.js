const {Coin} = require('../models')

class CoinController{
  static getAll(req,res){
    Coin
      .findAll()
      .then(result => res.status(200).json(result))
      .catch(err => res.status(500).json({error: err}))
  }
  static getOne(req,res){
    let id = req.params.id
    Coin
      .findByPk(id)
      .then(result => res.status(200).json(result))
      .catch(err=> res.status(500).json({error: err}))

  }
}
module.exports = CoinController