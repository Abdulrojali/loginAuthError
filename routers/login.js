const express = require('express')
const router = express.Router()
const {loginAuth} = require('../controllers/login')


router.post('/',loginAuth)

module.exports=router