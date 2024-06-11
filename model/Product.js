//import mongoose 
const mongoose = require('mongoose')
//crete schema
const productSchema = new mongoose.Schema({
    p_id: Number,
    p_name: String,
    p_cost: Number
})
module.exports = mongoose.model("Products", productSchema)
