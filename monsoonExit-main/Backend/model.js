//Write missing codes here
const mongoose = require('mongoose');
const schema = mongoose.Schema({
  title: String,
  content: String,
  img_url: String,
});
module.exports=mongoose.model('blogDetail',schema);
//Write missing codes here

// //Write missing codes here
// const schema = mongoose.Schema({
//   title: String,
//   content: String,
//   img_url: String,
// });

// //Write missing codes here
