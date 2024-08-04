const mongoose = require("mongoose");
//Write missing code here
mongoose
  .connect(
 
      'mongodb+srv://ananyapramod04:8136988796@cluster0.nu5shqq.mongodb.net/blogdb?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then((res) => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });


// const mongoose = require("mongoose");
// //Write missing code here
// mongoose
//   .connect(
   
//   )
//   .then(() => {
//     console.log("Connected to DB");
//   })
//   .catch((error) => {
//     console.log(error);
//   });
