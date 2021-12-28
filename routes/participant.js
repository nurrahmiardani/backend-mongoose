const express = require("express")
const ParticipantController = require("../controllers/participant.controller")

const router = express.Router()

router.post("/", ParticipantController.addData)
router.get("/", ParticipantController.getAll)
router.get("/:id", ParticipantController.getByID)
router.patch("/:id", ParticipantController.editData)
router.delete("/:id", ParticipantController.deleteData)

const ParticipantRouter = router
module.exports = ParticipantRouter