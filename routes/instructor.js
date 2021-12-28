const express = require("express")
const InstructorController = require("../controllers/instructor.controllers")

const router = express.Router()

router.post("/", InstructorController.addData)
router.get("/", InstructorController.getAll)
router.get("/:id", InstructorController.getByID)
router.patch("/:id", InstructorController.editData)
router.delete("/:id", InstructorController.deleteData)

const InstructorRouter = router
module.exports = InstructorRouter