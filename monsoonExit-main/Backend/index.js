const express = require("express");
const cors = require("cors");

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
require('./connection');
//Write missing code here
const BlogModel = require('./model');
//Write your POST API here
app.post('/post', async (req, res) => {
  try {
    const newBlog = new BlogModel(req.body);
    await newBlog.save();
    res.send(newBlog);
  } catch (error) {
    console.error(error);
    res.send('Error occurred ');
  }
});

app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});
app.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await BlogModel.findByIdAndDelete(id);
    res.send({ message: "Blog post deleted" });
  } catch (error) {
    console.log(error);
    res.send('Error occurred while deleting');
  }
});

app.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBlog = await BlogModel.findByIdAndUpdate(id, req.body, { new: true });
    res.send(updatedBlog);
  } catch (error) {
    console.log(error);
    res.send('Error occurred while updating');
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});


// const express = require("express");
// const cors = require("cors");

// const app = express();
// var PORT = 3001;
// app.use(express.json());
// app.use(cors());
// //Write missing code here

// //Write your POST API here

// app.get("/get", async (req, res) => {
//   try {
//     let data = await BlogModel.find();
//     res.send(data);
//   } catch (error) {
//     console.log(error);
//   }
// });


// app.listen(PORT, () => {
//   console.log(`${PORT} is up and running`);
// });
