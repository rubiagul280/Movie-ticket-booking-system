const mongoose=require('mongoose');

const Auditorium=new mongoose.Schema(
    {
        name:{type:String, required:true},
        capacity:{type:Number, required:true},
    },
    {collection:'auditoriums'}
)

const model=mongoose.model('Auditorium',Auditorium);
module.exports=model;