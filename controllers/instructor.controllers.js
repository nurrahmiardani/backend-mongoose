const InstructorModel = require("../models/instructor.model")

const getAll = async (req, res) => {
  try {
    const instructors = await InstructorModel.find()

    res.send(instructors)
  } catch (error) {
    res.status(500).send({error: error})
  }
}

const getByID = async (req, res) => {
  const {id} = req.params
  try {
    const instructor = await InstructorModel.findOne({_id: id})
    
    res.send(instructor)
  } catch (error) {
    res.status(500).send({error: error})
  }
}

const addData = async (req, res) => {
  
  try {
    const instructor = req.body
    
    const saved = await new InstructorModel(instructor).save()
    
    res.status(201).json({
      message: "new instructor created!",
      instructor: saved
    })
    
  } catch (error) {
    res.status(500).send({error: error})
  }
}

const editData = async (req, res) => {
  const {id} = req.params
  const data = req.body
  try {
    const updated = await InstructorModel.findOneAndUpdate({_id: id}, data, {new: true})

    res.send({
      message: "instructor data updated",
      instructor: updated
    })

  } catch (error) {
    res.status(500).send({error: error})
  }
}

const deleteData = async (req, res) => {
  const {id} = req.params
  
  try {
    await InstructorModel.deleteOne({_id: id})
    
    res.send({message: `instructor with id ${id} removed`})
  } catch (error) {
    res.status(500).send({error: error})
  }
}

module.exports = {
  addData,
  getAll,
  getByID,
  editData,
  deleteData
}