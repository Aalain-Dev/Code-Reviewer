const express = require("express");
const { createresponse } = require("../controllers/ai.controller");
const router = express.Router();


router.post('/generate', createresponse)

module.exports = router