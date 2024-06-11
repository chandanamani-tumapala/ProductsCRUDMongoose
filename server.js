//import modules
const express = require('express')
// let mongodb = require('mongodb')
let bodyparser = require('body-parser')
let mongoose = require("mongoose")
let cors = require('cors')
//create rest object 
let app = express()
//set Json as MIME type
app.use(bodyparser.json())
//client encoding form data to json 
app.use(bodyparser.urlencoded({ 'extended': 'false' }))
//import url 
let url = require('./url')
//use CORs
app.use(cors())
//connect to mongodb 
mongoose.connect(url, { dbName: 'newDb' })
    .then(() => {
        console.log("Connection is success")
    }, (errRes) => {
        console.log("Connection failed", errRes)
    })

//import routes
const productRoutes= require('./routes/productRoutes')
//use routes
app.use('/', productRoutes)


//create port 
let port = 8080
//assign port no 
app.listen(port, () => {
    console.log('Server listening port no:- ', port)
})