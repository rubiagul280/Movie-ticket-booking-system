import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// import jwt from "jsonwebtoken";
import { useJwt } from "react-jwt";

// import SwipeableViews from '../react-swipeable-views';
// import { autoPlay } from '../react-swipeable-views-utils';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
export default function Home() {
  const location= useLocation();
  // async function addMovie(){
  //   // event.preventDefault();
  //   const req=await fetch('http://localhost:8000/addmovie',{
  //     method:'POST',
  //     headers:{
  //       'Content-Type':'application/json',
  //     },
  //   })
  //   const data=await req.json();
  //   console.log(data);
  // }

  // async function addAuditorium(){
  //   await fetch('http://localhost:8000/addauditorium',{
  //     method:'POST',
  //   })
  // }

  // async function addMovieShow(){
  //   await fetch('http://localhost:8000/addmovieshow',{
  //     method:'POST',
  //   })
  // }

  // React.useEffect(()=>{
  //   // addMovie();
  //   // addAuditorium(); 
  //   // addMovieShow();
  // },[])

  React.useEffect(()=>{populateMovies();},[])
  // let i=0;
  const navigation=useNavigate();
  // const location = useLocation();
  const [images,setImages]=React.useState([]);
  // var images=[];
  // const images = [
  //   { label: 'Raya and the Last Dragon', imgPath: '/images/Raya_cardImg.jpeg', backgroundImage:'/images/Raya_backgroundImg.jpeg', date: 'March 5, 2021', about: "Raya, a warrior, sets out to track down Sisu, a dragon, who transferred all her powers into a magical gem which is now scattered all over the kingdom of Kumandra, dividing its people.", description: "Raya and the Last Dragon is a 2021 American computer-animated fantasy action-adventure film produced by Walt Disney Animation Studios and distributed by Walt Disney Studios Motion Pictures.  It was directed by Don Hall and Carlos López Estrada, co-directed by Paul Briggs and John Ripa (in their feature directorial debuts), and produced by Osnat Shurer and Peter Del Vecho.  Featuring the voices of Kelly Marie Tran, Awkwafina, Izaac Wang, Gemma Chan, Daniel Dae Kim, Benedict Wong, Sandra Oh, Thalia Tran, Lucille Soong, and Alan Tudyk, Raya and the Last Dragon is about the titular warrior princess, Raya. She seeks out the fabled last dragon, hoping to restore the dragon gem that would bring back her father and banish the evil spirits known as the Druun from the land of Kumandra.", titleImage:'/images/Raya_titleImg.png' },
  //   { label: 'Tangled', imgPath: "/images/Tangled_cardImg.jpeg", backgroundImage:'/images/Tangled_backgroundImg.jpeg', date: 'November 24, 2010', about: "Rapunzel, a naive and young girl, is locked up by her overly protective mother. Her wish to escape into the world outside finally comes true when she meets the good-hearted thief, Flynn.", description: "Tangled is a 2010 American 3D computer-animated musical adventure fantasy comedy film produced by Walt Disney Animation Studios and released by Walt Disney Pictures.   The film was directed by Nathan Greno and Byron Howard (in the former’s feature directorial debut), and produced by Roy Conli, with a screenplay written by Dan Fogelman.  The film stars the voices of Mandy Moore, Zachary Levi, and Donna Murphy. Tangled tells the story of Rapunzel, a lost young princess with magical long blonde hair who yearns to leave her secluded tower. She accepts the aid of an intruder to take her out into the world which she has never seen.", titleImage:'/images/Tangled_titleImg.png'},
  //   { label: 'The Simpsons', imgPath: "/images/The_Simpsons_cardImg.jpeg", backgroundImage:'/images/The_Simpsons_backgroundImg.jpeg', date: 'December 17, 1989', about: "Working-class father Homer Simpson and his dysfunctional family deal with comical situations and the ups-and-downs of life in the town of Springfield.", description: "The Simpsons is an American animated sitcom created by Matt Groening for the Fox Broadcasting Company.  he series is a satirical depiction of American life, epitomized by the Simpson family, which consists of Homer, Marge, Bart, Lisa, and Maggie.  The family was conceived by Groening shortly before a solicitation for a series of animated shorts with producer James L. Brooks. He created a dysfunctional family and named the characters after his own family members, substituting Bart for his own name; he thought Simpson was a funny name in that it sounded similar to 'simpleton'.", titleImage:'/images/The_Simpsons_titleImg.png' },
  //   { label: 'Inside Out', imgPath: "/images/Inside_out_cardImg.jpeg", backgroundImage:'/images/Inside_out_backgroundImg.jpeg', date: 'June 19, 2015', about: "Eleven-year-old Riley moves to San Francisco, leaving behind her life in Minnesota. She and her five core emotions, Fear, Anger, Joy, Disgust and Sadness, struggle to cope with her new life.", description: "Inside Out is a 2015 American computer-animated film directed by Pete Docter from a screenplay he co-wrote with Meg LeFauve and Josh Cooley.  It stars the voices of Amy Poehler, Phyllis Smith, Richard Kind, Bill Hader, Lewis Black, Mindy Kaling, Kaitlyn Dias, Diane Lane, and Kyle MacLachlan.  The film follows the inner workings inside the mind of a young girl named Riley, as five personified emotions administer her thoughts and actions as she adapts to her family's relocation.", titleImage:'/images/Inside_out_titleImg.png' },
  //   { label: 'Legends', imgPath: "/images/Legends_cardImg.jpeg", backgroundImage:'/images/Legends_backgroundImg.jpeg', date: 'September 9, 2015', about: "Identical twins Reggie and Ronnie Kray rise through the ranks of the criminal underworld to become two of London's most dreaded gangsters.", description: "Legend is a 2015 biographical crime thriller film written and directed by American director Brian Helgeland.  It is adapted from John Pearson's book The Profession of Violence: The Rise and Fall of the Kray Twins, which deals with their career and the relationship that bound them together, and follows their gruesome career to life imprisonment in 1969.  This is Helgeland's fifth feature film. Tom Hardy, Emily Browning, David Thewlis and Christopher Eccleston star with Colin Morgan, Chazz Palminteri, Paul Bettany, Tara Fitzgerald and Taron Egerton as well as the singer Duffy featured in supporting roles.", titleImage:'/images/Legends_titleImg.png' },
  //   { label: 'Incredible 2', imgPath: "/images/Incredibles_2_cardImg.jpeg", backgroundImage:'/images/Incredibles_2_backgroundImg.jpeg', date: 'June 15, 2018', about: "Entrusted with a task to restore public faith in superheroes, Helen sets off on a mission to catch a supervillain, while Bob faces the challenges of stay-at-home parenting.", description: "Incredibles 2 is a 2018 American computer-animated superhero film produced by Pixar Animation Studios and released by Walt Disney Pictures. Written and directed by Brad Bird, it is the sequel to The Incredibles.  The story follows the Incredibles as they try to restore the public's trust in superheroes while balancing their family life, only to combat a new foe who seeks to turn the populace against all superheroes.  Craig T. Nelson, Holly Hunter, Sarah Vowell and Samuel L. Jackson reprise their roles from the first film; newcomers to the cast include Huckleberry Milner, Bob Odenkirk, Catherine Keener and Jonathan Banks. Michael Giacchino returned to compose the score.", titleImage:'/images/Incredibles_2_titleImg.png'}
  // ];
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maximages = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleReset = () => {
  //   i=0;
  //   setActiveStep((prevActiveStep) => prevActiveStep - 5);
  // };

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function autoSlide() {
    // let that = images;
    // let count = images.length;
    // localStorage.setItem('i','0');
    // setInterval(function () {
    //   setActiveStep(parseInt(localStorage.getItem('i')));
    //   localStorage.setItem('i',(parseInt(localStorage.getItem('i'))+1));
    //   if (count === (parseInt(localStorage.getItem('i')))) {
    //     localStorage.setItem('i','0');//resets
    //   }
    // }, 3000);

    let count = images.length;
    let i = 0;
    setInterval(function () {
      
      setActiveStep(i);
      i++;
      if (count === i) {
        i = 0;//resets
      }
    }, 3000);

    // setInterval(function () {
      
    //   setActiveStep( activeStep + 1);
    //   if (count === activeStep) {
    //     setActiveStep(0);//resets
    //   }
    // }, 3000);
  }

  // React.useEffect(()=>{ },[setActiveStep(activeStep)])

  React.useEffect(
    autoSlide, []);

  // const [quote,setQuote]=React.useState("");
  // const [tempQuote,setTempQuote]=React.useState("");

  async function populateMovies(){
    const req=await fetch('http://localhost:8000/movies',{
      headers:{
        'x-access-token':localStorage.getItem('token'),
      },
    })
    const data=await req.json();
    if(data.status==='ok'){
      setImages(data.movies);
      // images=data.movies;
      console.log(images);
    }
    else{
      alert(data.error);
    }
    console.log(data);
  }

  // async function populateQuote(){
  //   const req=await fetch('http://localhost:8000/api/quote',{
  //     headers:{
  //       'x-access-token':localStorage.getItem('token'),
  //     },
  //   })
  //   const data=await req.json();
  //   if(data.status==='ok'){
  //     setQuote(data.quote);
  //   }
  //   else{
  //     alert(data.error);
  //   }
  //   console.log(data);
  // }
  const token=localStorage.getItem('token');
  const { decodedToken, isExpired } = useJwt(token);
  React.useEffect(()=>{
    
    if(token){
      // const user=jwt.decode(token);
      // if(!user){
      //   localStorage.removeItem('token');
      //   navigation('/login');
      // }
      // else{
      //   populateQuote();
      // }
      if(isExpired){
        localStorage.removeItem('token');
        navigation('/login');
      }
      else{
        // populateQuote();
      }
    }
  },[])

  // async function updateQuote(event){
  //   event.preventDefault();
  //   const req=await fetch('http://localhost:8000/api/quote',{
  //     method:'POST',
  //     headers:{
  //       'Content-Type':'application/json',
  //       'x-access-token':localStorage.getItem('token'),
  //     },
  //     body: JSON.stringify({
  //       quote:tempQuote
  //     })
  //   })
  //   const data=await req.json();
  //   if(data.status==='ok'){
  //     setQuote(tempQuote);
  //     setTempQuote('');
  //   }
  //   else{
  //     alert(data.error);
  //   }
  //   console.log(data);
  // }
  var isLoggedIn = localStorage.getItem("token");
  return (
    <Box>
    {images.length!=0?
    <Box sx={{
      width: '100%',
      height: '100%',
      backgroundImage: 'url(/images/home-background.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      backgroundAttachment: 'fixed', 
      paddingBottom: 15, position: 'relative'
    }}>
      <Header />
      {/* <div style={{paddingBottom:60}}>
      <h1 style={{color:"white"}}>Your quote: {quote|| 'No quote found'}</h1>
      <form onSubmit={updateQuote}>
        <input type="text" placeholder='Quote' value={tempQuote} onChange={(e)=>setTempQuote(e.target.value)}/>
        <input type="submit" value="Update Quote" />
      </form>
      </div> */}
      {activeStep>(images.length-1)?
        setActiveStep(activeStep-images.length):
      <Box sx={{ width: '100%', flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            bgcolor: 'background.default',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: 70,
              backgroundColor: 'black',
              textAlign: 'center',

            }}>
            <Typography variant="h4" component="h5" sx={{ color: 'white', fontWeight: 'bold' }}>{images[activeStep]?.label}</Typography>
          </Box>
        </Paper>
        <Box
          component="img"
          sx={{
            height: 500,
            display: 'block',
            width: '100%',
            overflow: 'hidden',
          }}
          src={images[activeStep]?.imgPath}
          alt={images[activeStep]?.label}
        />
        {/* <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2 }}>
        {images[activeStep].description}
      </Box> */}
        <MobileStepper
          variant="text"
          images={maximages}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maximages - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
}
      <Box
        sx={{
          mx: '10%',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around'
        }}>
        {
          images.map(image => (
            <Box>
            <Box sx = {{ height: '20px'}}></Box>
            <Paper elevation={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                title={image?.label}
                subheader={image?.date}
              />
              <CardMedia
                component="img"
                height="194"
                image={image?.imgPath}
                alt=""
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {image?.about}

                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                {/* <nav>
                  <ul>
                    <li><Link to={{
                      pathname: "/details",
                      image: image,
                    }}>Book Movie</Link></li>
                  </ul>
                </nav> */}
                <Button variant="contained" onClick={() => {
                  navigation('/details', {state:image})
                }} disabled={(!isLoggedIn)}>Book Movie</Button>
                {/* <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton> */}
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph sx={{fontWeight: 'bold'}}>Description:</Typography>

                  <Typography paragraph>
                    {image.description?.split("  ")[0]}
                  </Typography>
                  <Typography paragraph>
                    {image.description?.split("  ")[1]}
                  </Typography>
                  <Typography>
                    {image.description?.split("  ")[2]}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
            </Paper>
            </Box>
          ))
        }



      </Box>
      <Footer />
    </Box>
    :<Box></Box>  }
    </Box>
  );
}