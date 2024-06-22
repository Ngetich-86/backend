
import mongoose from "mongoose";

const { model } = mongoose;
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
    minlength: 3,
    maxlength: 50,
  },
  description: {
    type: String,
    required: false,
    minlength: 5,
    maxlength: 255,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
  isPublished: {
    type: Boolean,
    default: false,
  },
  
  timestamp: {
    type: String,
  },
});
 
export default model("Product", productSchema);
// const Product = mongoose.model("Product", productSchema);
// module.exports = Product;