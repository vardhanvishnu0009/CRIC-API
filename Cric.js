const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CricSchema = new Schema({
    variable:{
        type:Number
    },
    bowling:{
        type:Number
    },
    batting:{
        type:Number
    },
    name:{
        type:String
    },
    fullname:{
        type:String
    },
    born:{
        type:Number
    },
    currentAge:{
        type:Number
    },
    country:{
        type:String
    }
   

},{timestamps:true})

module.exports = mongoose.model('crics',CricSchema)