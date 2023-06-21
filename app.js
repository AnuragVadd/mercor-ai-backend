require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const serverless = require('serverless-http')
const path = require("path");
const mongoose = require('mongoose');
const app = express();
const authRoute = require('./router/auth')
const meetingRoute = require('./router/meetingRoute')
const gptRoute = require('./router/gptRoute')
var corsOption = {
  origin: "*",
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};
app.use(cors(corsOption));
// Middleware
app.use(bodyParser.json()); // Add this line
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
app.use(authRoute)
app.use(meetingRoute)
app.use(gptRoute)

const startMongo = async () => {
  await mongoose
   .connect( 
     process.env.DB_URL, 
     {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   })
   .then(result => {
     console.log("Connected to DB")  
   })
   .catch(err => {
     console.log(err);
   });
 }

 startMongo();

app.listen(process.env.PORT || 3000);

module.exports.run = serverless(app)