const ParticipantModel = require("../models/participant.model")

const getAll = async (req, res) => {
  try {
    const participants = await ParticipantModel.find().populate({
      path: "courses",
      populate: {path: "instructor"}
    })

    res.send(participants)
  } catch (error) {
    res.status(500).send({"error": error})
  }
}

const getByID = async (req, res) => {
  const {id} = req.params
  
  try {
    const participant = await ParticipantModel.findOne({_id: id}).populate({
      path: "courses",
      populate: {path: "instructor"}
    })

    if(!participant)
      return res.sendStatus(400)
    
    res.send(participant)
  } catch (error) {
    res.status(500).send({"error": error})
  }
}

const addData = async (req, res) => {
  try {
    const participant = req.body

    const saved = await new ParticipantModel(participant).save()

    res.status(201).json({
      message: "new participant created!",
      participant: saved
    })
  } catch (error) {
    res.status(500).send({error: error})
  }
}

const editData = async (req, res) => {
  const {id} = req.params
  const data = req.body
  
  try {
    const updated = await ParticipantModel.findOneAndUpdate({_id: id}, data, {new: true})
    
    res.send({
      message: "participant data updated",
      participant: updated
    })
  } catch (error) {
    res.status(500).send({error: error})
  }
}

const deleteData = async (req, res) => {
  const {id} = req.params
  
  try {
    await ParticipantModel.deleteOne({_id: id})
    
    res.send({message: `participant with id ${id} removed`})  
  } catch (error) {
    res.status(500).send({error: error})
  }
}

module.exports = {
  getAll,
  getByID,
  addData,
  editData,
  deleteData
}