const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config()

const configuration = new Configuration({
  organization: process.env.ORGANIZATION_ID,
  apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);

const startRecognition = async (req, res) => {
  console.log("tetsing response data = " + JSON.stringify(req.body))

  // console.log("tetsing ERROR data = " + JSON.stringify(req.body.data.error))
  // console.log("tetsing ERROR data = " + JSON.stringify(req.body.data.error))

  try{
    var input = req.body.data;
      input = req.body.data.replace(/sam/gi, '');
     
      await openai
        .createChatCompletion({
          model: "gpt-3.5-turbo-0613",
          messages: [{ role: "user", content: input }],
        })
        .then((response) => {
          let output = response.data.choices[0].message.content 
          res.status(200).send(output);
        })
        .catch((error) => {
          console.log(error);
        });  
  }catch (e){
    res.status(200).send(JSON.stringify(e));
  }
};

module.exports = {
  startRecognition,
  // stopRecognition,
};
