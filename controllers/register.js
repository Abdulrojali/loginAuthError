const users= require('../models/users')
const bcrypt=require('bcrypt')
const registers=async(req,res)=>{
    const {username,password} = req.body
    const hashPassword=bcrypt.hashSync(password,10)
    const newUsers=await new users({
        username:username,
        password:hashPassword
    })
    if(newUsers){
        newUsers.save()
        res.redirect('/')
    }
    else{
        res.redirect('/404')
    }
}

module.exports={registers}