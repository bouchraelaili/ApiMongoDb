require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

var cors = require('cors')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, PATCH, POST, OPTIONS, PUT, DELETE");
  next();
});


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true , useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))


app.use(express.json())


const subscribersRouter = require('./routes/subscribers.js')
app.use('/subscribers', subscribersRouter)



app.listen(3000,function(){
    console.log(" Server Started");
 });