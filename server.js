const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const Cric = require('./Models/Cric')


mongoose.connect('mongodb+srv://dbUser:21VIas5XzbIURbLo@cluster0.cgtti.mongodb.net/Test?retryWrites=true&w=majority',
{useNewUrlParser:true,useUnifiedTopology:true})
const db = mongoose.connection
db.on('error' , (err)=>{
    console.log(err)
})

db.once('open',()=>{
    console.log('database connection established')
})

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 9898
app.listen(PORT,()=>{
    console.log(`server  running on port ${PORT}`)
})

app.get('/crics',(req,res,next)=>{
    const searchedField= req.query.variable;
    Cric.find({name:{$regex: searchedField,$options:'$1'}})
    .then(data=>{
        res.send(data);
    })
})