import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { styled, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { fontWeight } from '@mui/system';
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from 'react-router-dom';

export default function Search() {
  // const images = [
  //   { label: 'Raya', imgPath: '/images/Raya_cardImg.jpeg', backgroundImage:'/images/Raya_backgroundImg.jpeg', date: 'September 14, 2016', about: "Marvel's The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures", description: "The film's development began when Marvel Studios received a loan from Merrill Lynch in April 2005. After the success of the film Iron Man in May 2008, Marvel announced that The Avengers would be released in July 2011 and would bring together Tony Stark (Downey), Steve Rogers (Evans), Bruce Banner (Ruffalo), and Thor (Hemsworth) from Marvel's previous films. With the signing of Johansson as Natasha Romanoff in March 2009 and Renner as Clint Barton in June 2010, the film was pushed back for a 2012 release. Whedon was brought on board in April 2010 and rewrote the original screenplay by Zak Penn. Production began in April 2011 in Albuquerque, New Mexico, before moving to Cleveland, Ohio in August and New York City in September. The film has more than 2,200 visual effects shots.  Avengers premiered in Los Angeles on April 11, 2012, and was released in the United States on May 4, as the last film of Phase One of the MCU. The film received praise for Whedon's direction and screenplay, visual effects, action sequences, acting, and musical score, and garnered numerous awards and nominations including Academy Award and BAFTA nominations for achievements in visual effects. The film grossed over $1.5 billion worldwide, setting numerous box office records and becoming the third-highest-grossing film of all time at the time of its release and the highest-grossing film of 2012, as well as the first Marvel production to generate $1 billion in ticket sales. In 2017, The Avengers was featured as one of the 100 greatest films of all time in an Empire magazine poll.  Three sequels have been released: Avengers: Age of Ultron (2015), Avengers: Infinity War (2018), and Avengers: Endgame (2019).", titleImage:'/images/Raya_titleImg.png' },
  //   { label: 'Tangled', imgPath: "/images/Tangled_cardImg.jpeg", backgroundImage:'/images/Tangled_backgroundImg.jpeg', date: 'September 14, 2016', about: "Marvel's The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures", description: "The film's development began when Marvel Studios received a loan from Merrill Lynch in April 2005. After the success of the film Iron Man in May 2008, Marvel announced that The Avengers would be released in July 2011 and would bring together Tony Stark (Downey), Steve Rogers (Evans), Bruce Banner (Ruffalo), and Thor (Hemsworth) from Marvel's previous films. With the signing of Johansson as Natasha Romanoff in March 2009 and Renner as Clint Barton in June 2010, the film was pushed back for a 2012 release. Whedon was brought on board in April 2010 and rewrote the original screenplay by Zak Penn. Production began in April 2011 in Albuquerque, New Mexico, before moving to Cleveland, Ohio in August and New York City in September. The film has more than 2,200 visual effects shots.  Avengers premiered in Los Angeles on April 11, 2012, and was released in the United States on May 4, as the last film of Phase One of the MCU. The film received praise for Whedon's direction and screenplay, visual effects, action sequences, acting, and musical score, and garnered numerous awards and nominations including Academy Award and BAFTA nominations for achievements in visual effects. The film grossed over $1.5 billion worldwide, setting numerous box office records and becoming the third-highest-grossing film of all time at the time of its release and the highest-grossing film of 2012, as well as the first Marvel production to generate $1 billion in ticket sales. In 2017, The Avengers was featured as one of the 100 greatest films of all time in an Empire magazine poll.  Three sequels have been released: Avengers: Age of Ultron (2015), Avengers: Infinity War (2018), and Avengers: Endgame (2019).", titleImage:'/images/Tangled_titleImg.png'},
  //   { label: 'The Simpsons', imgPath: "/images/The_Simpsons_cardImg.jpeg", backgroundImage:'/images/The_Simpsons_backgroundImg.jpeg', date: 'September 14, 2016', about: "Marvel's The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures", description: "The film's development began when Marvel Studios received a loan from Merrill Lynch in April 2005. After the success of the film Iron Man in May 2008, Marvel announced that The Avengers would be released in July 2011 and would bring together Tony Stark (Downey), Steve Rogers (Evans), Bruce Banner (Ruffalo), and Thor (Hemsworth) from Marvel's previous films. With the signing of Johansson as Natasha Romanoff in March 2009 and Renner as Clint Barton in June 2010, the film was pushed back for a 2012 release. Whedon was brought on board in April 2010 and rewrote the original screenplay by Zak Penn. Production began in April 2011 in Albuquerque, New Mexico, before moving to Cleveland, Ohio in August and New York City in September. The film has more than 2,200 visual effects shots.  Avengers premiered in Los Angeles on April 11, 2012, and was released in the United States on May 4, as the last film of Phase One of the MCU. The film received praise for Whedon's direction and screenplay, visual effects, action sequences, acting, and musical score, and garnered numerous awards and nominations including Academy Award and BAFTA nominations for achievements in visual effects. The film grossed over $1.5 billion worldwide, setting numerous box office records and becoming the third-highest-grossing film of all time at the time of its release and the highest-grossing film of 2012, as well as the first Marvel production to generate $1 billion in ticket sales. In 2017, The Avengers was featured as one of the 100 greatest films of all time in an Empire magazine poll.  Three sequels have been released: Avengers: Age of Ultron (2015), Avengers: Infinity War (2018), and Avengers: Endgame (2019).", titleImage:'/images/The_Simpsons_titleImg.png' },
  //   { label: 'Inside Out', imgPath: "/images/Inside_out_cardImg.jpeg", backgroundImage:'/images/Inside_out_backgroundImg.jpeg', date: 'September 14, 2016', about: "Marvel's The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures", description: "The film's development began when Marvel Studios received a loan from Merrill Lynch in April 2005. After the success of the film Iron Man in May 2008, Marvel announced that The Avengers would be released in July 2011 and would bring together Tony Stark (Downey), Steve Rogers (Evans), Bruce Banner (Ruffalo), and Thor (Hemsworth) from Marvel's previous films. With the signing of Johansson as Natasha Romanoff in March 2009 and Renner as Clint Barton in June 2010, the film was pushed back for a 2012 release. Whedon was brought on board in April 2010 and rewrote the original screenplay by Zak Penn. Production began in April 2011 in Albuquerque, New Mexico, before moving to Cleveland, Ohio in August and New York City in September. The film has more than 2,200 visual effects shots.  Avengers premiered in Los Angeles on April 11, 2012, and was released in the United States on May 4, as the last film of Phase One of the MCU. The film received praise for Whedon's direction and screenplay, visual effects, action sequences, acting, and musical score, and garnered numerous awards and nominations including Academy Award and BAFTA nominations for achievements in visual effects. The film grossed over $1.5 billion worldwide, setting numerous box office records and becoming the third-highest-grossing film of all time at the time of its release and the highest-grossing film of 2012, as well as the first Marvel production to generate $1 billion in ticket sales. In 2017, The Avengers was featured as one of the 100 greatest films of all time in an Empire magazine poll.  Three sequels have been released: Avengers: Age of Ultron (2015), Avengers: Infinity War (2018), and Avengers: Endgame (2019).", titleImage:'/images/Inside_out_titleImg.png' },
  //   { label: 'Legends', imgPath: "/images/Legends_cardImg.jpeg", backgroundImage:'/images/Legends_backgroundImg.jpeg', date: 'September 14, 2016', about: "Marvel's The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures", description: "The film's development began when Marvel Studios received a loan from Merrill Lynch in April 2005. After the success of the film Iron Man in May 2008, Marvel announced that The Avengers would be released in July 2011 and would bring together Tony Stark (Downey), Steve Rogers (Evans), Bruce Banner (Ruffalo), and Thor (Hemsworth) from Marvel's previous films. With the signing of Johansson as Natasha Romanoff in March 2009 and Renner as Clint Barton in June 2010, the film was pushed back for a 2012 release. Whedon was brought on board in April 2010 and rewrote the original screenplay by Zak Penn. Production began in April 2011 in Albuquerque, New Mexico, before moving to Cleveland, Ohio in August and New York City in September. The film has more than 2,200 visual effects shots.  Avengers premiered in Los Angeles on April 11, 2012, and was released in the United States on May 4, as the last film of Phase One of the MCU. The film received praise for Whedon's direction and screenplay, visual effects, action sequences, acting, and musical score, and garnered numerous awards and nominations including Academy Award and BAFTA nominations for achievements in visual effects. The film grossed over $1.5 billion worldwide, setting numerous box office records and becoming the third-highest-grossing film of all time at the time of its release and the highest-grossing film of 2012, as well as the first Marvel production to generate $1 billion in ticket sales. In 2017, The Avengers was featured as one of the 100 greatest films of all time in an Empire magazine poll.  Three sequels have been released: Avengers: Age of Ultron (2015), Avengers: Infinity War (2018), and Avengers: Endgame (2019).", titleImage:'/images/Legends_titleImg.png' },
  //   { label: 'Incredible 2', imgPath: "/images/Incredibles_2_cardImg.jpeg", backgroundImage:'/images/Incredibles_2_backgroundImg.jpeg', date: 'September 14, 2016', about: "Marvel's The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures", description: "The film's development began when Marvel Studios received a loan from Merrill Lynch in April 2005. After the success of the film Iron Man in May 2008, Marvel announced that The Avengers would be released in July 2011 and would bring together Tony Stark (Downey), Steve Rogers (Evans), Bruce Banner (Ruffalo), and Thor (Hemsworth) from Marvel's previous films. With the signing of Johansson as Natasha Romanoff in March 2009 and Renner as Clint Barton in June 2010, the film was pushed back for a 2012 release. Whedon was brought on board in April 2010 and rewrote the original screenplay by Zak Penn. Production began in April 2011 in Albuquerque, New Mexico, before moving to Cleveland, Ohio in August and New York City in September. The film has more than 2,200 visual effects shots.  Avengers premiered in Los Angeles on April 11, 2012, and was released in the United States on May 4, as the last film of Phase One of the MCU. The film received praise for Whedon's direction and screenplay, visual effects, action sequences, acting, and musical score, and garnered numerous awards and nominations including Academy Award and BAFTA nominations for achievements in visual effects. The film grossed over $1.5 billion worldwide, setting numerous box office records and becoming the third-highest-grossing film of all time at the time of its release and the highest-grossing film of 2012, as well as the first Marvel production to generate $1 billion in ticket sales. In 2017, The Avengers was featured as one of the 100 greatest films of all time in an Empire magazine poll.  Three sequels have been released: Avengers: Age of Ultron (2015), Avengers: Infinity War (2018), and Avengers: Endgame (2019).", titleImage:'/images/Incredibles_2_titleImg.png'}
  // ];

  const [images,setImages]=React.useState([]);

  React.useEffect(()=>{populateMovies();},[])
  
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

  const [imagesSearched, setImagesSearched] = React.useState([]);
  const [searchMovie, setSearchMovie] = React.useState("");
  const navigation=useNavigate();

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 10,
    backgroundColor: ' white',
    '&:hover': {
      backgroundColor: 'white',
      opacity: 0.9,
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '60ch',
        '&:focus': {
          width: '80ch',
        },
      },
    },
  }));
  var isLoggedIn = localStorage.getItem("token");
  return (<Box sx={{
    width: '100%',
    height: '100%',
    backgroundImage: 'url(/images/home-background.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    backgroundAttachment: 'fixed',
    paddingBottom: 48,
    position: 'relative'
  }}><Header />
    <Box
      sx={{
        width: '100%',
        height: 70,
        backgroundColor: 'black',
        textAlign: 'center',
        '&:hover': {
          backgroundColor: 'black',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>
      <Typography variant="h4" component="h5" sx={{ color: 'white', fontWeight: 'bold' }}>
        Movie Search
      </Typography>
    </Box>

    {/* <Toolbar sx={{ my: '2%', justifyContent: "center" }} >
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Enter Movie Name You Want to Search…"
          inputProps={{ 'aria-label': 'search' }}
          value={searchMovie}
          onChange={e =>{setSearchMovie(e.target.value)}}
        />
      </Search>
    </Toolbar> */}
    <Box sx={{
      my: '2%',
      mx:'20%',
      justifyContent: 'center',

    }}>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              
                <SearchIcon sx={{ mr: 1, my: 0.5, mx: 1 }}/>
              
            </InputAdornment>
          ),
          disableUnderline: true,
        }}
        
        margin="normal"
        required
        fullWidth
        name="name"
        placeholder="Enter Movie Name You Want to Search…"
        type="text"
        id="name"
        autoComplete="name"
        variant="standard"
        sx={{
          position: 'relative',
          borderRadius: 10,
          backgroundColor: ' white',
          '&:hover': {
            backgroundColor: 'white',
            opacity: 0.9,
          },
          marginLeft: 0,
          width: '100%',
          py:1
        }}
        value={searchMovie}
        onChange={e => { setSearchMovie(e.target.value) }} />
    </Box>

    <Button sx={{ marginBottom: '3%', mx: '30%', width: '40%', fontWeight: 'bold', borderRadius: 10, py:1.2}} variant="contained"
      onClick={() => {
        setImagesSearched(images.filter(image => {
          return image.label.toLowerCase().includes(searchMovie.toLowerCase());
        })
        )
      }

      }
    >
      Search Movie
    </Button>
    <Box
      sx={{
        mx: '10%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
      }}
    >
      {
        imagesSearched.map(image => (
          <Card sx={{ maxWidth: 345, position: "relative", my: '2%' }}>
            <CardMedia
              component="img"
              alt="Avenger"
              image={image.imgPath}
              title={image.label}
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                height: "100%",
                width: "100%"
              }}
            />
            <CardContent sx={{
              color: "#ffffff",
              position: "relative",
              backgroundColor: "rgba(0,0,0,0.24)",
            }}>
              <Typography gutterBottom variant="h5" component="h2">
                {image.label}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255,255,255,0.78)" }}
                component="p"
              >
                {image.about}
              </Typography>
            </CardContent>
            <CardActions sx={{
              color: "#ffffff",
              backgroundColor: "rgba(0,0,0,.24)", position: "relative"
            }}>
              <Button size="small" color="inherit" variant="outlined" onClick={() => {
                  navigation('/details', {state:image})
                }} disabled={(!isLoggedIn)}>
                Book Movie
              </Button>
            </CardActions>
          </Card>
        ))
      }
    </Box><Footer /></Box>);
}