const CourseModel = require("../models/course.model")


const getAll = async (req, res) => {
  try {
    const courses = await CourseModel.find().populate("instructor")

    res.send(courses)
  } catch (error) {
    res.status(500).send(error)
  }
}

const getByID = async (req, res) => {
  const {id} = req.params
  
  try {
    const course = await CourseModel.findOne({_id: id}).populate("instructor")

    if(!course) {
      return res.sendStatus(404)
    }
    
    res.send(course)
  } catch (error) {
    res.status(500).send(error)
  }
}

const addData = async (req, res) => {
  try {
    const newCourse = req.body
    
    const saved = await new CourseModel(newCourse).save()
    
    res.json({
      message: "new course created!",
      course: saved
    })
    
  } catch (error) {
    res.status(500).send(error)
  }
}

const editData = async (req, res) => {
  try {
    const {id} = req.params
    const data = req.body
    
    const updated = await CourseModel.findOneAndUpdate({_id: id}, data, {new: true})
    
    res.send({
      message: "course data updated",
      course: updated
    })
  } catch (error) {
     res.status(500).send(error)
   }
 }

 const deleteData = async (req, res) => {
   try {
     const {id} = req.params

     await CourseModel.deleteOne({_id: id})

     res.send({message: `course with id ${id} removed`})
   } catch (error) {
     
   }
 }

module.exports = {
  getAll,
  getByID,
  addData,
  editData,
  deleteData
}