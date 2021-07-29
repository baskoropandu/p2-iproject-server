const jwt = require('jsonwebtoken')
require('dotenv').config()

function generateToken(data){
  return jwt.sign(data, process.env.SECRET_KEY)
}

function decodeToken(token){
  return jwt.verify(token,process.env.SECRET_KEY)
}

module.exports = {generateToken, decodeToken}