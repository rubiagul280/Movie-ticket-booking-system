const mongoose=require('mongoose');

const Movie=new mongoose.Schema(
    {
        label:{type:String, required:true, unique:true},
        imgPath:{type:String, required:true},
        backgroundImage:{type:String, required:true},
        date:{type:String, required:true},
        about:{type:String, required:true},
        description:{type:String, required:true},
        titleImage:{type:String, required:true},
        // minutes:{type:Number, required:true},
    },
    {collection:'movies'}
)

const model=mongoose.model('Movie',Movie);
module.exports=model;