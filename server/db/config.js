const mongoose  = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGOURL)
.then(()=>console.log('Connection successfullyy!!'))
.catch((err) => console.log('There is some error:::',err));



