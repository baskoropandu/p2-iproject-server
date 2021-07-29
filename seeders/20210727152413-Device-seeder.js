'use strict';
const fs = require('fs')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     let data = fs.readFileSync('./GPU.csv','utf-8')
     data = data.split('\r\n')
     
     let output = []
     
     data.forEach(gpu =>{
       // console.log(gpu);
       let rawData = gpu.split(',')
       let newData = {
         name: rawData[0],
         brand: rawData[1],
         createdAt: new Date,
         updatedAt: new Date
       }
       output.push(newData)
     })

     return queryInterface.bulkInsert('Devices', output)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      return queryInterface.bulkDelete('Devices', {})
  }
};
