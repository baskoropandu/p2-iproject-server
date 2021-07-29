const express = require('express')
const app = express()
const router = require('./routes')
const {updater, reporter} = require('./helpers/backgroundJob')

const port = process.env.PORT || 3000

app.use(express.urlencoded({extended: false}))

app.use(express.json())

updater.start()
reporter.start()

app.use(router)

app.listen(port, ()=>{
  console.log(`listening @ http://localhost:${port}`);
})