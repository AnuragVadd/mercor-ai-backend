const express = require('express');

const meetingController = require('../routes/meetings')

// const {
//   requires
// } = require('../Controllers/admin');

const router = express.Router();

router.get("/meetings/id", meetingController.findAllMeetings);
router.get("/meetings/get", meetingController.findMeeting);
router.post('/meetings', meetingController.createMeeting)
// router.post('/merchant/signup', authController.signUpUser);


// router.post('/signup', function(req, res){
//   authController.signUpUser({req: req, res: res})
//   // res.send("Manager created successfully 123456")
// })


module.exports = router;