const mongoose=require('mongoose');

const Booking=new mongoose.Schema(
    {
        // has_paid_ticket:{type:Boolean, required:true},
        no_of_seats:{type:Number, required:true},
        user:{
            type:mongoose.Types.ObjectId,
            ref:'User'
        },
        // seat:[{
        //     type:mongoose.Types.ObjectId,
        //     ref:'Seat'
        // }],
        movieshow:{
            type:mongoose.Types.ObjectId,
            ref:'MovieShow'
        },
    },
    {collection:'bookings'}
)

const model=mongoose.model('Booking',Booking);
module.exports=model;