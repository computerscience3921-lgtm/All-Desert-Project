const mongoose = require('mongoose');
const product = require('../models/productModel');

const productSchema = mongoose.Schema({
    name : String,
    description : String,
    image : String,
    category : String,
    startingPrice : Number,
    currentBid : Number,
    buyNowPrice : Number,
    sellerId : mongoose.Schema.Types.ObjectId,
    auctionEndAt : Date,
    status : String
});

module.exports = mongoose.model('Product', productSchema , 'product');