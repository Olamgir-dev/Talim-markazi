const express = require("express");
const {} = require("../controllers/joinGroup");

const router = express.Router();

router.put("/joinGroup", joinGroup);

module.exports = router;