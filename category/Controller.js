const Category = require('./Modal')
const mongoose = require('mongoose')
require('dotenv').config()

const getCat =async (req, res) => {
  try {
      await mongoose.connect(process.env.MONGO_URL)
      const category = await Category.find()
      res.json(
          {
            category
          }
      )
  }
  catch (error) {
      res.json(
          {
              message: error.message
          }
      )

  }
}

const postCategory = async (req, res) => {
  const {name,description} = req.body;
  try {
    if (name && description) {
      await mongoose.connect(process.env.MONGO_URL)
      await Category.create({ name,description })
      res.status(201).json({
        message: "category Add Successfully"
      })
    }

    else {
      res.status(403).json({
        message: "Required Fields"
      })
    }
  }
  catch (error) {
    res.json({
      message: error.message
    })
  }

};

const getCatbyID = async (req, res) => {

  const { _id } = req.params


  try {
      await mongoose.connect(process.env.MONGO_URL)
      const category = await Category.findOne({ _id})
      res.json(
          {
              category
          }
      )

  }

  catch (error) {
      res.json(
          {
              message: error.message
          }
      )

  }
};

const  DelCategory = async (req, res) => {
  const { name } = req.body
  try {
    await mongoose.connect(process.env.MONGO_URL)
   await Category.deleteOne({name})
   const category = await Category.find()
    res.json(
      {
        category,
        message : "succesfully deleted"
      }
    )
  }
  catch (error) {
    res.json(
      {
        message: error.message
      }
    )

  }
};

const updateCategory = async (req, res) => {

  const { _id, name, description } = req.body

  const filter = { _id };
  const update = { name, description};

  try {
      await connect(process.env.MONGO_URL)
      await Category.findOneAndUpdate(filter, update, {
          new: true
      })

      const category = await Category.find()

      res.json({
          message: "Success",
          category
      })

  }

  catch (error) {
      res.json({
          message: error.message,
      })
  }
}




module.exports = { getCat, postCategory ,getCatbyID,DelCategory,updateCategory};
