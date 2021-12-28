const express = require("express")
const CourseController = require("../controllers/course.controllers")

const router = express.Router()

router.post("/", CourseController.addData)
router.get("/", CourseController.getAll)
router.get("/:id", CourseController.getByID)
router.patch("/:id", CourseController.editData)
router.delete("/:id", CourseController.deleteData)

const CourseRouter = router
module.exports = CourseRouter