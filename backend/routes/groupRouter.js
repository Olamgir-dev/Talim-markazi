const express = require('express')
const {addGroup, getAllGroups} =  require('../controllers/groupController')

const router = express.Router()

router.get('/', getAllGroups);
router.post('/add', addGroup);

module.exports = router