const mongoose=require('mongoose');

const MovieShow=new mongoose.Schema(
    {
        price:{type:Number, required:true},
        startTime:{type:String, required:true},
        endTime:{type:String, required:true},
        date:{type:String, required:true},
        auditorium:{
            type:mongoose.Types.ObjectId,
            ref:'Auditorium',
        },
        movie:{
            type:mongoose.Types.ObjectId,
            ref:'Movie'
        },
    },
    {collection:'movieshows'}
)

const model=mongoose.model('MovieShow',MovieShow);
module.exports=model;