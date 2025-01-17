const mongoose = require("mongoose")
const { Schema } = mongoose;

const blogSchema = new Schema({
  img: String, 
  name: String,
  price: Number,
});

const blogModel= mongoose.model("blog",blogSchema)

module.exports=blogModel