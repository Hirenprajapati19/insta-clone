const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const POST = mongoose.model("POST")
const USER = mongoose.model("user")


module.exports = router;