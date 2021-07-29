const bcrypt = require('bcryptjs')

function hasher(password){
  return bcrypt.hashSync(password, 9)
}
function comparer(password, dbPassword){
  return bcrypt.compareSync(password, dbPassword)
}

module.exports = {hasher, comparer}