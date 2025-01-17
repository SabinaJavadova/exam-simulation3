const blogModel = require('../model/index')

const getAllData = async (req,res) => {
  try {
    
    const getData = await blogModel.find()
    if (!getData) {
      res.status(404).json({message:"not Found!"})
    }
    res.status(200).json(getData)
  } catch (error) {
    res.status(500).send({message:error.message})
  }
}
const getAllDataById = async (req,res) => {
  const id = req.params.id
  try {
    
    const getDataId = await blogModel.findById(id)
    if (!getDataId) {
      res.status(404).json({message:"not Found!"})
    }
    res.status(200).json(getDataId)
  } catch (error) {
    res.status(500).send({message:error.message})
  }
}

const deleteData = async (req,res) => {
  const id = req.params.id;
  try {
    const deletedData = await blogModel.findByIdAndDelete(id)
    if (!deletedData) {
      res.status(404).json({message:"not Found!"})
    }
    res.status(200).json({message:"deleted",deletedData:deletedData})
  }  catch (error) {
    res.status(500).send({message:error.message})
  }
}

const postData = async (req,res) => {
  try {
    const createData = blogModel({...req.body})
    await createData.save()
    if (!createData) {
      res.status(404).json({message:"not Found!"})
    }
    res.status(200).json({message:"created",createData:createData})
  }  catch (error) {
    res.status(500).send({message:error.message})
  }
}


module.exports={
getAllData,
getAllDataById,
deleteData,
postData
}