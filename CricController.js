const Cric = require('../Models/Cric')

exports.getCric= (req,res)=>{
    Cric.find()
    .then(response=>res.status(200).json({message:'Data found succesfully',crics:response}))
    .catch(err=>res.status(500),json({message:err}))
}