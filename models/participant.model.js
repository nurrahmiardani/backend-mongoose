const mongoose = require("mongoose")

const ParticipantSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 50
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    maxLength: 50
  },
  phone: {
    type: String,
    maxLength: 13
  },
  courses: [{
    type: mongoose.Types.ObjectId,
    ref: "Course"
  }]
})

const ParticipantModel = mongoose.model("Participant", ParticipantSchema)
module.exports = ParticipantModel