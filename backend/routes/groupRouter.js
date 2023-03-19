const express = require('express')
const {addGroup, getAllGroups , getTeacherGroups} =  require('../controllers/groupController')

const router = express.Router()

router.get('/', getAllGroups);
router.post('/add', addGroup);
router.get('/teacher/:id', getTeacherGroups);


module.exports = router