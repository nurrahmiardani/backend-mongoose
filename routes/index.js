const express = require("express")
const CourseRouter = require("./course")
const InstructorRouter = require("./instructor")
const ParticipantRouter = require("./participant")

const router = express.Router()

router.get("/", (req, res) => {
  res.send({
    message: "Hello World"
  })
})

router.use("/instructor", InstructorRouter)
router.use("/participant", ParticipantRouter)
router.use("/course", CourseRouter)

module.exports = router