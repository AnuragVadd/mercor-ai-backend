const { Configuration, OpenAIApi } = require('openai');


const configuration = new Configuration({
  organization: process.env.OPENAI_ORG,
  apiKey:  process.env.OPENAI_SECRET,
});

const openai = new OpenAIApi(configuration);





const startRecognition = async (req, res) => {
  if (req.body.data) {
    var input = req.body.data
    await openai
    .createChatCompletion({
      model: "gpt-3.5-turbo-0613",
      messages: [{ role: "user", content: input }],
    })
    .then((res) => {
      console.log(res.data.choices[0].message.content);
      userInterface.prompt();
    })
    .catch((e) => {
      console.log(e);
    });
    res.status(200).send('Recognition stopped.');
  } else {
    res.status(200).send('Recognition is not currently running.');
  }
};

const stopRecognition = async (req, res) => {
  if (req.body.data) {
    var input = req.body.data;
    // console.log(input.includes("sam"))
    // if (req.body.data.toLowerCase().includes('sam')) {
      // input = req.body.data.replace(/sam/gi, '');
    
      await openai
        .createChatCompletion({
          model: "gpt-3.5-turbo-0613",
          messages: [{ role: "user", content: input }],
        })
        .then((response) => {
          let output = response.data.choices[0].message.content 
          console.log(response.data.choices[0].message.content);
          res.status(200).send(output);
        })
        .catch((error) => {
          console.log(error);
        });
    // } else {
    //   console.log("No action taken. Input does not contain 'sam'.");
    // }
    
    
  } else {
    res.status(200).send('Recognition is not currently running.');
  }
};


module.exports = {
  startRecognition,
  stopRecognition,
};
