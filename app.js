const express = require('express');
const app = express();
const cors = require('cors');
const serverless = require('serverless-http')
const recognitionRoute = require('./router/router')
app.use(express.json());
app.use(cors({origin : ["https://main.dbg07i5yve34w.amplifyapp.com"]}));
app.use(cors())
app.use(recognitionRoute)

app.listen(process.env.PORT || 3001, () => {
  console.log('Server is running on port 3001');
});


module.exports.run = serverless(app)