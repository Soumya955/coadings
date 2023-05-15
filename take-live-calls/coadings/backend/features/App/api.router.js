const express = require("express");
const bcrypt = require("bcrypt/bcrypt")
const jwt = require("jsonwebtoken");
const UserModel = require("./User.model");
const EventModel = require("./Event.model");

const app = express.Router();

app.get("/testing", async(req, res) => {
  res.send("Success")
})

app.post("/signup", async(req, res) => {
  const {email,name, password} = req.body;
 const user1 = await UserModel.findOne({email});
  bcrypt.hash(password, 5, async function(err, hash) {
      if(user1){
       return res.json({msg : "Email is already exists"})
      }
      if(err){
        return  res.json({msg:"Something went wrong"})
      }
      const user = new UserModel({
          email,
          name,
          password : hash
      })
      try{
          await user.save()
          res.json({msg :"Signup is successfull"})
      }
      catch(err){
          console.log(err)
          res.send("Something wrong")
      }
  });
})

app.post("/login", async (req, res) => {
  const {email, password} = req.body;
  const user = await UserModel.findOne({email})
  const hash = user.password
  bcrypt.compare(password, hash, function(err, result) {
      if(err){
          res.send("Something went wrong")
      }
      if(result){
          const token = jwt.sign({ userId : user._id }, "srb");
          res.json({message : "Login Successfull",token,user})
      }
      else{
          res.send("Invalid Credentials")
      }
  });
})

app.post("/event", async (req, res) => {
    try {
      let newevent = await EventModel.create(req.body);
      res.send(newevent);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  
  app.get("/event", async (req, res) => {
    try {
      let data = await EventModel.find()
      res.send(data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
  app.get("/singleevent/:id", async (req, res) => {
    try {
      let data = await EventModel.find({_id:req.params.id})
      res.send(data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
  app.get("/event/:search", async (req, res) => {
    try {
      let data = await EventModel.find({$or:[{name:req.params.search},{sport:req.params.search}]})
      res.send(data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  app.patch("/event/:id", async (req, res) => {
    let {id}=req.params;
    try {
      let data = await EventModel.findByIdAndUpdate(id,req.body)
      res.send(data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });



 module.exports = app;