const { User } = require('../models')
const {hasher, comparer} = require('../helpers/bcrypt')
const {generateToken} = require('../helpers/jwt')


class UserController{
  static register(req,res){
    let newUser = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber
    }
    // console.log(newUser);
    User
      .create(newUser)
      .then(result => {
        let registeredUser = {
          id: result.id,
          username: result.username
        }
        res.status(201).json(registeredUser)
      })
      .catch(err => {
        res.status(500).json({error: err})
      })
  }
  static login(req,res){
    let email = req.body.email
    let password = req.body.password

    User
      .findOne({where: {email}})
      .then(result => {
        let dbPassword = result.password
        if(comparer(password,dbPassword)){
          res.status(200).json({access_token: generateToken(result.id), username: result.username})
        }else {
          res.status(401).json({error: `wrong email/password`})
        }
      })
      .catch(err=> res.status(401).json({error: `wrong email/password`}))
  }
}

module.exports = UserController