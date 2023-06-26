# mercor-ai-backend

This project a submission for the Mercor backend vetting project assignment.

Please open this url to access the frontend - https://main.dbg07i5yve34w.amplifyapp.com/

Steps to validate - 

  1) once the frontend is open, click on the unmute button at the bottom left of the page.
    ![image](https://github.com/AnuragVadd/mercor-ai-backend/assets/38868279/9b628c96-4b9c-4952-93a4-273ae6ff0d6f)

  2) If the button is saying "mute", then the microphone is active, and the speech recognition has begun. The window to the right hand side will show the live transcript of what the speech recognition has captured from your speech.
     ![image](https://github.com/AnuragVadd/mercor-ai-backend/assets/38868279/8b92dfca-be18-46c8-b787-905c4f6fb95c)
      ![image](https://github.com/AnuragVadd/mercor-ai-backend/assets/38868279/f5e6c56b-a399-400e-a305-cbdb04f2d233)

  3) After speaking the query into the mic, the app will wait for 1.5 seconds, once the time is up, it will send a post request to the backend.
  4) Once the request is  sent, the backend endpoint will run the function to start the Chat GPT response.
  5) Once the response is ready, the react app should automatically play the audio of the generated Chat GPT response.
  6) The response can also be seen below the live transcript text.
  7) incase the generated response is too long, you can press the stop gpt response, and the audio will stop playing, at which point you can continue asking more queries.

NOTE - while the mic is unmuted, the app will continue speech recognition indefinitely, in order to close it, please mute the microphone.
