const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
  meeting_title: {
    type: String,
    required: true
  },
  meeting_uid: {
    type: String,
    required: true
  },
  created_by: {
    type: String,
    required: true
  }
});

const Meeting = mongoose.model('Meeting', meetingSchema);

module.exports = Meeting;