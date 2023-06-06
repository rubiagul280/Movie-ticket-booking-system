const mongoose=require('mongoose');

const Seat=new mongoose.Schema(
    {
        number:{type:Number, required:true},
        // name:{type:String, required:true},
    },
    {collection:'seats'}
)

const model=mongoose.model('Seat',Seat);
module.exports=model;