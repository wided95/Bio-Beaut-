const mongoose=require("mongoose");
const productSchema = new mongoose.Schema({ 
    product_image:String,
    product_title:  String, // String is shorthand for {type: String}
    product_price: String,
    category:String,
    product_desc:String,
    product_rate:String
  });
  const Product = mongoose.model('Product', productSchema);
  module.exports=Product;