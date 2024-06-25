const express = require('express')
const app = express()
const morgan = require('morgan')
const path =require('path')
const cors = require('cors')
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.static(__dirname + 'views'));

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use('/login',require('./routers/login'))
app.use('/registers',require('./routers/register'))

app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/404',(req,res)=>{
    res.render('404')
})

app.get('/admin',(req,res)=>{
    res.render('admin')
})

app.listen(8080,()=>{
    console.log('https://localhost:8080')
})