const express = require('express')
const router = express.Router()
const {registers} = require('../controllers/register')

router.get('/registers',(req,res)=>{
    res.render('registers')
})
router.post('/',registers)


module.exports=router