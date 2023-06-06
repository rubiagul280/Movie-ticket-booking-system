const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
const User=require('./models/user');
const Movie=require('./models/movie');
const Auditorium=require('./models/auditorium');
const MovieShow=require('./models/movieshow');
const Booking=require('./models/booking');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/movie-ticket-booking');

var user;
var auditorium1;
var auditorium2;
var movies;

app.post('/api/register', async (req,res)=>{
    // console.log(req.body);
    try{
        const newPassword=await bcrypt.hash(req.body.password,10);
        await User.create({
            name:req.body.name,
            email:req.body.email,
            password:newPassword,
            cpassword:req.body.cpassword,
        });
        res.json({status:'ok'});
    }
    catch(err){
        res.json({status:'error',error:'Duplicate email'});
    }
});

app.post('/api/login', async (req,res)=>{
    user=await User.findOne({
        email:req.body.email,
    });
    const isPasswordValid=await bcrypt.compare(req.body.password,user.password);
    if(isPasswordValid){
        const token=jwt.sign(
            {
                name:user.name,
                email:user.email,
            },
            'secret1234'
        )
        res.json({status:'ok',user:token});
    }
    else{ 
        res.json({status:'error',user:false});
    }
});

app.post('/addmovie', async (req,res)=>{
    try{
        await Movie.create({
            label:"Raya and the Last Dragon",
            imgPath:"/images/Raya_cardImg.jpeg",
            backgroundImage:"/images/Raya_backgroundImg.jpeg",
            date:"March 5, 2021",
            about:"Raya, a warrior, sets out to track down Sisu, a dragon, who transferred all her powers into a magical gem which is now scattered all over the kingdom of Kumandra, dividing its people.",
            description:"Raya and the Last Dragon is a 2021 American computer-animated fantasy action-adventure film produced by Walt Disney Animation Studios and distributed by Walt Disney Studios Motion Pictures.  It was directed by Don Hall and Carlos López Estrada, co-directed by Paul Briggs and John Ripa (in their feature directorial debuts), and produced by Osnat Shurer and Peter Del Vecho.  Featuring the voices of Kelly Marie Tran, Awkwafina, Izaac Wang, Gemma Chan, Daniel Dae Kim, Benedict Wong, Sandra Oh, Thalia Tran, Lucille Soong, and Alan Tudyk, Raya and the Last Dragon is about the titular warrior princess, Raya. She seeks out the fabled last dragon, hoping to restore the dragon gem that would bring back her father and banish the evil spirits known as the Druun from the land of Kumandra.",
            titleImage:"/images/Raya_titleImg.png",
        });
        await Movie.create({
            label:"Tangled",
            imgPath:"/images/Tangled_cardImg.jpeg",
            backgroundImage:"/images/Tangled_backgroundImg.jpeg",
            date:"November 24, 2010",
            about:"Rapunzel, a naive and young girl, is locked up by her overly protective mother. Her wish to escape into the world outside finally comes true when she meets the good-hearted thief, Flynn.",
            description:"Tangled is a 2010 American 3D computer-animated musical adventure fantasy comedy film produced by Walt Disney Animation Studios and released by Walt Disney Pictures.   The film was directed by Nathan Greno and Byron Howard (in the former’s feature directorial debut), and produced by Roy Conli, with a screenplay written by Dan Fogelman.  The film stars the voices of Mandy Moore, Zachary Levi, and Donna Murphy. Tangled tells the story of Rapunzel, a lost young princess with magical long blonde hair who yearns to leave her secluded tower. She accepts the aid of an intruder to take her out into the world which she has never seen.",
            titleImage:"/images/Tangled_titleImg.png",
        });
        await Movie.create({
            label:"The Simpsons",
            imgPath:"/images/The_Simpsons_cardImg.jpeg",
            backgroundImage:"/images/The_Simpsons_backgroundImg.jpeg",
            date:"December 17, 1989",
            about:"Working-class father Homer Simpson and his dysfunctional family deal with comical situations and the ups-and-downs of life in the town of Springfield.",
            description:"The Simpsons is an American animated sitcom created by Matt Groening for the Fox Broadcasting Company.  he series is a satirical depiction of American life, epitomized by the Simpson family, which consists of Homer, Marge, Bart, Lisa, and Maggie.  The family was conceived by Groening shortly before a solicitation for a series of animated shorts with producer James L. Brooks. He created a dysfunctional family and named the characters after his own family members, substituting Bart for his own name; he thought Simpson was a funny name in that it sounded similar to 'simpleton'.",
            titleImage:"/images/The_Simpsons_titleImg.png",
        });
        await Movie.create({
            label:"Inside Out",
            imgPath:"/images/Inside_out_cardImg.jpeg",
            backgroundImage:"/images/Inside_out_backgroundImg.jpeg",
            date:"June 19, 2015",
            about:"Eleven-year-old Riley moves to San Francisco, leaving behind her life in Minnesota. She and her five core emotions, Fear, Anger, Joy, Disgust and Sadness, struggle to cope with her new life.",
            description:"Inside Out is a 2015 American computer-animated film directed by Pete Docter from a screenplay he co-wrote with Meg LeFauve and Josh Cooley.  It stars the voices of Amy Poehler, Phyllis Smith, Richard Kind, Bill Hader, Lewis Black, Mindy Kaling, Kaitlyn Dias, Diane Lane, and Kyle MacLachlan.  The film follows the inner workings inside the mind of a young girl named Riley, as five personified emotions administer her thoughts and actions as she adapts to her family's relocation.",
            titleImage:"/images/Inside_out_titleImg.png",
        });
        await Movie.create({
            label:"Legends",
            imgPath:"/images/Legends_cardImg.jpeg",
            backgroundImage:"/images/Legends_backgroundImg.jpeg",
            date:"September 9, 2015",
            about: "Identical twins Reggie and Ronnie Kray rise through the ranks of the criminal underworld to become two of London's most dreaded gangsters.", 
            description: "Legend is a 2015 biographical crime thriller film written and directed by American director Brian Helgeland.  It is adapted from John Pearson's book The Profession of Violence: The Rise and Fall of the Kray Twins, which deals with their career and the relationship that bound them together, and follows their gruesome career to life imprisonment in 1969.  This is Helgeland's fifth feature film. Tom Hardy, Emily Browning, David Thewlis and Christopher Eccleston star with Colin Morgan, Chazz Palminteri, Paul Bettany, Tara Fitzgerald and Taron Egerton as well as the singer Duffy featured in supporting roles.", 
            titleImage:"/images/Legends_titleImg.png"
        });
        await Movie.create({
            label:"Incredible 2",
            imgPath: "/images/Incredibles_2_cardImg.jpeg", 
            backgroundImage:"/images/Incredibles_2_backgroundImg.jpeg", 
            date: "June 15, 2018", 
            about: "Entrusted with a task to restore public faith in superheroes, Helen sets off on a mission to catch a supervillain, while Bob faces the challenges of stay-at-home parenting.", 
            description: "Incredibles 2 is a 2018 American computer-animated superhero film produced by Pixar Animation Studios and released by Walt Disney Pictures. Written and directed by Brad Bird, it is the sequel to The Incredibles.  The story follows the Incredibles as they try to restore the public's trust in superheroes while balancing their family life, only to combat a new foe who seeks to turn the populace against all superheroes.  Craig T. Nelson, Holly Hunter, Sarah Vowell and Samuel L. Jackson reprise their roles from the first film; newcomers to the cast include Huckleberry Milner, Bob Odenkirk, Catherine Keener and Jonathan Banks. Michael Giacchino returned to compose the score.", 
            titleImage:"/images/Incredibles_2_titleImg.png"
        });
        
        res.json({status:'ok'});
    }
    catch(err){
        res.json({status:'error',error:'Error occured while creating Movie'});
    }
});

app.get('/movies',async(req, res) => {
    try{
        movies=await Movie.find({});
        res.json({status:'ok',movies:movies});
    }
    catch(err){
        res.json({status:'error',error:'Error occured while getting Movies'});
    }
});

app.post('/addauditorium', async (req,res)=>{
    try{
        auditorium1=await Auditorium.create({
            name:"Hall",
            capacity:50
        });

        auditorium2=await Auditorium.create({
            name:"Theature",
            capacity:10
        });
        
        res.json({status:'ok'});
    }
    catch(err){
        res.json({status:'error',error:'Error occured while creating Auditorium'});
    }
});

app.get('/auditoriums',async(req, res) => {
    try{
        var auditoriums=await Auditorium.find({});
        res.json({status:'ok',auditoriums:auditoriums});
    }
    catch(err){
        res.json({status:'error',error:'Error occured while getting Auditoriums'});
    }
});

app.post('/addmovieshow', async (req,res)=>{
    try{
        await MovieShow.create({
            price:1000,
            startTime:"09:00 AM",
            endTime:"12:00 AM",
            auditorium:auditorium1._id,
            movie:(await Movie.findOne({label:"Raya and the Last Dragon"}))._id,
            date:"17-09-2022",
        });

        await MovieShow.create({
            price:800,
            startTime:"12:00 AM",
            endTime:"2:00 AM",
            auditorium:auditorium2._id,
            movie:(await Movie.findOne({label:"Raya and the Last Dragon"}))._id,
            date:"17-09-2022",
        });

        await MovieShow.create({
            price:500,
            startTime:"05:00 PM",
            endTime:"08:00 PM",
            auditorium:auditorium1._id,
            movie:(await Movie.findOne({label:"Tangled"}))._id,
            date:"18-09-2022",
        });

        await MovieShow.create({
            price:500,
            startTime:"09:00 PM",
            endTime:"12:00 PM",
            auditorium:auditorium1._id,
            movie:(await Movie.findOne({label:"Legends"}))._id,
            date:"19-09-2022",
        });

        await MovieShow.create({
            price:800,
            startTime:"02:00 PM",
            endTime:"05:00 PM",
            auditorium:auditorium1._id,
            movie:(await Movie.findOne({label:"Incredibles 2"}))._id,
            date:"19-09-2022",
        });
        
        res.json({status:'ok'});
    }
    catch(err){
        res.json({status:'error',error:'Error occured while creating Movie Show'});
    }
});

app.get('/movieshows',async(req, res) => {
    try{
        movieshows=await MovieShow.find({});
        res.json({status:'ok',movieshows:movieshows});
    }
    catch(err){
        res.json({status:'error',error:'Error occured while getting Movie Shows'});
    }
});

app.get('/movieshows/:name',async(req, res) => {
    try{
        const movie=await Movie.findOne({'label':req.params.name});
        movieshows=await MovieShow.find({'movie':movie._id});
        res.json({status:'ok',movieshows:movieshows});
    }
    catch(err){
        res.json({status:'error',error:'Error occured while getting Movie Shows'});
    }
});

app.get('/movieshows/:name/:auditoriumid',async(req, res) => {
    try{
        const movie=await Movie.findOne({'label':req.params.name});
        movieshows=await MovieShow.find({'movie':movie._id,'auditorium':req.params.auditoriumid});
        res.json({status:'ok',movieshows:movieshows});
    }
    catch(err){
        // res.json({status:'error',error:'Error occured while getting Movie Shows'});
    }
});

app.get('/seatsavailable/:movieshowid/:noOfSeats',async(req, res) => {
    try{
        const movieshow=await MovieShow.findOne({'_id':req.params.movieshowid}).populate('auditorium');
        const bookings=await Booking.find({'movieshow':movieshow._id});
        console.log(bookings);
        var seats=0;
        for(var i=0;i<bookings.length;i++){
            seats+=bookings[i].no_of_seats
        }
        available_seats=movieshow.auditorium.capacity-seats;
        if(req.params.noOfSeats>available_seats){
            res.json({status:'error',available_seats:available_seats});
        }
        else{
            res.json({status:'ok'});
        }
    }
    catch(err){
        res.json({status:'errorOccur',error:'Error occured'});
    }
});

app.post('/addbooking',function(req,res,next){
    Booking.create({
        no_of_seats: req.body.no_of_seats,
        user: user._id,
        movieshow: req.body.movieshowid,
    }).then((result)=>{
        res.statusCode=200;
        res.setHeader('Content-Type', 'application/json');
        res.json(result);
    },err=>next(err))
    .catch((err)=>next(err));
});

app.get('/bookings',function(req,res,next){
    Booking.find({'user':user._id}).populate('user').populate({
        path    : 'movieshow',
        populate: [
            { path: 'movie' },
            { path: 'auditorium' }
        ]
   }).exec(function(err,data){
        if(err){
            return next(err);
        }
        res.json({data:data,user:user});
    })
});

app.delete("/booking/:bid",function(req,res,next){
    Booking.deleteOne({_id:req.params.bid},function(err,result){
        if (err) {
            return next(err);
        }
        res.json(result);
    });
});

// app.get('/api/quote', async (req,res)=>{
//     const token =req.headers['x-access-token'];
//     try{
//         const decoded=jwt.verify(token,'secret1234');
//         const email=decoded.email;
//         const user=await User.findOne({
//             email:email,
//         });
//         return res.json({status:'ok',quote:user.quote});
//     }
//     catch(error){
//         console.log(error);
//         res.json({status:'error',error:'invalid token'})
//     }
// });

// app.post('/api/quote', async (req,res)=>{
//     const token =req.headers['x-access-token'];
//     try{
//         const decoded=jwt.verify(token,'secret1234');
//         const email=decoded.email;
//         await User.updateOne({
//             email:email,
//         },
//         {
//             $set:{quote:req.body.quote}
//         });
//         return res.json({status:'ok'});
//     }
//     catch(error){
//         console.log(error);
//         res.json({status:'error',error:'invalid token'})
//     }
// });

//-----------------------------------Help----------------------------------------//

//Delete 
// router.delete("/class/:cid",function(req,res,next){
//     //Callback
//     Class.deleteOne({_id:req.params.cid},function(err,result){
//         if (err) {
//             return next(err);
//         }
//         //Deleted object show
//         res.json(result);
//     });
// });

//Assign One
// router.put('/assignteacher/:tid/:cid',function(req,res,next){
//     Class.findOneAndUpdate({_id:req.params.cid},{teacher:req.params.tid},function(err,result,next){
//         if (err){
//             return next(err);
//         }
//         res.json(result);
//     });
// });

//Assign Many
// router.put('/assignstudent/:cid/:sid',function(req,res,next){
//     Class.findOneAndUpdate({_id:req.params.cid},
//     {
//         "$push":{
//             "students": {
//                 "sid": req.params.sid
//             }
//         }
//     }, { new: true, upsert: false}
//     ,function(err,result,next){
//         if (err){
//             return next(err);
//         }
//         res.json(result);
//     });
// });

//View
// router.get('/classes',function(req,res,next){
//     Class.find().populate('teacher').populate('students.sid').exec(function(err,data){
//         if(err){
//             return next(err);
//         }
//         res.json(data);
//     })
// });

app.listen(8000,()=>{
    console.log("Server started on 8000");
});