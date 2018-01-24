
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/productdetailbc4");

const Schema = mongoose.Schema;

const productSchema = new Schema({

    name : String,
    description : String,
    variant : String,
    price : Number,
    color : String,
    image : String
   
});

//"employee" itu bakal jadi nama databasenya di mongoose, jadi basically di model ini buat create
//schema ato templatenya, klo di case ini employee, kaya nama, address dsb 
const Product = mongoose.model("product", productSchema);

module.exports = Product;