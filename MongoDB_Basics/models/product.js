const mongoose = require('mongoose');

const productschema =  new mongoose.Schema({
    title : String,
    price : Number,
    inStock : Boolean
})

const product =  mongoose.model('Product', productschema);

module.exports = product;