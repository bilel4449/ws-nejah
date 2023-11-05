const express = require("express");
require("dotenv").config({ path: "./config/.env" });
const connectDb = require("./config/connectDb");
const User = require("./model/user");
const app = express();
connectDb();
app.use(express.json());
//CRUD
// create new user
app.post("/add", async (req, res) => {
  const { fullName, email, phone } = req.body;
  try {
    const newUser = new User({
      fullName,
      email,
      phone,
    });
    await newUser.save();
    res.send(newUser);
  } catch (error) {
    console.log(error.message);
  }
});

// get all users
app.get("/get", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    console.log(error.message);
  }
});

//get one user
app.get("/getOne/:id", async (req, res) => {
  try {
    const theUser = await User.findById(req.params.id);
    res.send(theUser);
    console.log(theUser);
  } catch (error) {
    console.log(error.message);
  }
});

// delete user
app.delete("/delete/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.send("user ra7");
  } catch (error) {
    console.log(error.message);
  }
});

//edit user
app.put("/edit/:id",async(req,res)=>{
    try {
        const editedUser=await User.findByIdAndUpdate(req.params.id,{...req.body},{new:true})
        res.send(editedUser)
    } catch (error) {
        console.log(error.message)
    }
})
const PORT = process.env.PORT || 4000;
app.listen(PORT, (err) =>
  err
    ? console.log(err)
    : console.log(`server is successfuly runing on PORT ${PORT}`)
);
