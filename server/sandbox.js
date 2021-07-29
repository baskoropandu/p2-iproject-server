const fs = require('fs')

let data = fs.readFileSync('./GPU.csv','utf-8')
data = data.split('\r\n')

let output = []

data.forEach(gpu =>{
  // console.log(gpu);
  let rawData = gpu.split(',')
  let newData = {
    name: rawData[0],
    brand: rawData[1]
  }
  output.push(newData)
})

console.log(output);