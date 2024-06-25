const bcrypt=require('bcrypt')
const users = require('../models/users')
const loginAuth=async(req,res)=>{
    try{
        res.status(200)
        const {username,password} = req.body
        const user=await users.findOne({username})
        if(user){
            const passMatch=await bcrypt.compareSync(password,user.password)
            if(passMatch){
                res.redirect('/admin')
            }
            else{
                res.redirect('/404')
            }
        }
    }
    catch(err){
        res.status(404).send(err)
    }

}

module.exports={loginAuth}

