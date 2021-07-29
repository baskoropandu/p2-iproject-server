const { decodeToken } = require('../helpers/jwt')
const {User} = require('../models')

function authenticate(req,res,next) {
  let access_token = req.headers.access_token
  let userId = decodeToken(access_token)
  console.log(userId);
  User
    .findByPk(userId)
    .then(result=>{
      let user = {
        id: result.id,
        username: result.username
      }
      req.user = user
      next()
    })
    .catch(err =>{
      res.status(500).json({error: err})
    })

  
}

module.exports = authenticate