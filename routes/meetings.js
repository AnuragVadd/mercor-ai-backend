const Meeting = require('../models/meeting');


  const findAllMeetings = async (req, res) => {
    const id = req.params.id;
    
    try {
      const meetings = await Meeting.find({ createdBy: id });
      res.status(200).send(meetings);
    } catch (error) {
      res.status(500).jsonp({ message: "Internal server error" });
    }
  }


  const findMeeting = async (req, res) => {
    const title = req.query.meeting_title;
    console.log(title)
    try {
      const meeting = await Meeting.findOne({ meeting_title: title });
      console.log("data " + meeting)
      res.status(200).send(meeting);
    } catch (error) {
      console.log("error " + error)
      res.status(500).send({ message: error });
    }
  }


  const createMeeting = async (req, res) => {
    const { name, uid, createdBy } = req.body;
    
    if (!name || !uid) {
      return res.status(200).jsonp({ message: "Please provide the meeting name and meeting uid" });
    }
    
    try {
      const createdMeeting = await Meeting.create({ meeting_title: name, meeting_uid: uid, created_by: createdBy });
      res.status(200).jsonp({ insertId: createdMeeting._id });
    } catch (error) {
      console.log(error);
      res.status(500).jsonp({ message: "Internal server error" });
    }
  }


  module.exports = {
    createMeeting, findAllMeetings, findMeeting
  }
