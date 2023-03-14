const Group = require('../models/groupModel')

const addGroup = async (req, res) =>{
  const newGroup = await new Group(req.body)
  newGroup
  .save()
  .then((result)=> res.status(200).json(result))
  .catch((err )=> res.status(400).json({msg: err.message}))
}

module.exports = {addGroup}