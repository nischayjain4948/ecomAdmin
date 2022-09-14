const express = require('express');
const app = express();
const dotenv = require('dotenv');
const User = require('./db/User');

const cors = require('cors');


// Package used for resolve the cors error!
app.use(cors());

// This is a kind of middle ware 
app.use(express.json());

//. Enivroment
dotenv.config();


// requring the DataBase 
require('./db/config');




app.post('/register', async (req,res)=>{

  let user = new User(req.body);
  let result =  await user.save()
  res.send(result)

  if(!result){

    console.log("Duplicate email");

  }


})





app.listen(process.env.PORT || 4200,()=>{

    console.log("App is running on port ");

})
