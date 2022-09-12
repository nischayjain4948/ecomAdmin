const express = require('express');
const app = express();
const dotenv = require('dotenv');

app.use(express.json());

dotenv.config();

require('./db/config');

const User = require('./db/User');


app.post('/register', async (req,res)=>{

  let user = new User(req.body);
  let result =  await user.save()
  res.send(result)





})





app.listen(process.env.PORT || 4200,()=>{

    console.log("App is running on port ", 4300 );

})
