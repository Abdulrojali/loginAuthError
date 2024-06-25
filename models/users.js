const mongoose = require('mongoose')
const Schema = mongoose

mongoose.connect('mongodb://localhost:27017/loginAuth')
.then((res)=>console.log(res))
.catch((err)=>console.log(err))

const schema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const users=mongoose.model('users',schema)
module.exports=users