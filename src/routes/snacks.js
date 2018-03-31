const express = require('express')
const router = express.Router()
// const db = require('./db/snacks.js')
const ctrl = require('../controllers/snacks')



router.get('/', ctrl.getAll)








module.exports = router