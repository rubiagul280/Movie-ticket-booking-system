import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';
import { useJwt } from "react-jwt";

export default function History() {
  // const historys=[{title:"Spiderman", theature:"Auditorium", time: "2:20"}, {title:"Incredible 2", theature:"Auditorium", time: "10:20"}]
  
  const token=localStorage.getItem('token');
  const { decodedToken, isExpired } = useJwt(token);
  const navigation=useNavigate();

  const[historys,setHistorys]=React.useState([]);
  const[user,setUser]=React.useState([]);

  async function populateData(){
    const req=await fetch('http://localhost:8000/bookings',{
      headers:{
        'x-access-token':localStorage.getItem('token'),
      },
    })
    const data=await req.json();
    setHistorys(data.data);
    setUser(data.user);
    console.log(data);
  }

  async function deleteBooking(id){
    const req=await fetch('http://localhost:8000/booking/'+id,{
      method: 'DELETE',
      headers:{
        'x-access-token':localStorage.getItem('token'),
      },
    })
    const data=await req.json();
    //alert("Booking deleted successfully")
    populateData();
    // setUser(data.user);
    console.log(data);
  }

  React.useEffect(()=>{   
    if(token){
      if(isExpired){
        localStorage.removeItem('token');
        navigation('/login');
      }
      else{
        populateData();
      }
    }
  },[])

  return (<Box sx={{
    width: '100%',
    height: '100%',
    backgroundImage: 'url(/images/home-background.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    backgroundAttachment: 'fixed',
    position:'relative',
    paddingBottom:15,

  }}><Header />
    <Box
      sx={{
        mx: '15%',
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          my: 5,
          mx:12,
          width: 300,
          height: 300,
        },
      }}
    >
      <Paper elevation={3} >
        <Box>
          <Box>
            <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center", py:5,}}>
              <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
              <Box className="mt-3">
                <Typography variant="h4" component="h5">{user.name}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
      <Paper elevation={3}><Box>
        <Box>
          <Box sx={{display:"flex", flexDirection:"column", my:9, }}>
            <Grid container sx={{mx:2,my:2}}>
              <Grid item xs={3}><Typography variant="h7" component="h4" sx={{mb:0}}>Name</Typography></Grid>
              <Grid item xs={9}>{user.name}</Grid >
            </Grid>
            <Divider variant="middle" />
            <Grid container sx={{mx:2,my:2}}>
              <Grid item xs={3}><Typography variant="h7" component="h4" sx={{mb:0}}>Email</Typography></Grid>
              <Grid item xs={9}>{user.email}</Grid >
            </Grid>
            <Divider variant="middle" />
            {/* <Grid container sx={{mx:2,my:2}}>
              <Grid item xs={3}><Typography variant="h7" component="h4" sx={{mb:0}}>Phone</Typography></Grid>
              <Grid item xs={9}>(239) 816-9029</Grid >
            </Grid>
            <Divider variant="middle" />
            <Grid container sx={{mx:2,my:2}}>
              <Grid item xs={3}><Typography variant="h7" component="h4" sx={{mb:0}}>Mobile</Typography></Grid>
              <Grid item xs={9}>(320) 380-4539</Grid >
            </Grid>
            <Divider variant="middle" />
            <Grid container sx={{mx:2,my:2}}>
              <Grid item xs={3}><Typography variant="h7" component="h4" sx={{mb:0}}>Address</Typography></Grid>
              <Grid item xs={9}>116 Hoy Rd, Ithaca, NY, 1485</Grid >
            </Grid>
            <Divider variant="middle" /> */}
          </Box>
        </Box>
      </Box></Paper>
      {historys.length!=0?
        historys.map(history=>(<Paper elevation={3}><Box>
          <Box>
            <Box sx={{display:"flex", flexDirection:"column", my:2}}>
              <Grid container>
                <Typography variant="h5" component="h4" sx={{fontWeight:"bold", textAlign:"center", color:"blue", mb:2, mx:4,}}>🎟 Movie Ticket 🎟</Typography>
              </Grid>
              <Grid container sx={{mx:2,my:2}}>
                <Grid item xs={3}><Typography variant="h7" component="h4" sx={{mb:0}}>Title</Typography></Grid>
                <Grid item xs={9}>{history.movieshow.movie.label}</Grid >
              </Grid>
              <Divider variant="middle" />
              <Grid container sx={{mx:2,my:2}}>
                <Grid item xs={3}><Typography variant="h7" component="h4" sx={{mb:0}}>Theatre</Typography></Grid>
                <Grid item xs={9}>{history.movieshow.auditorium.name}</Grid> 
              </Grid>
              <Divider variant="middle" />
              <Grid container sx={{mx:2,my:2}}>
                <Grid item xs={3}><Typography variant="h7" component="h4" sx={{mb:0}}>Time</Typography></Grid>
                <Grid item xs={9}>{history.movieshow.startTime}-{history.movieshow.endTime}</Grid >
              </Grid>
              <Divider variant="middle" />
              <Button variant="outlined" color="error" sx={{backgroundColor:'red', color:"black", fontWeight: 'bold',mx:8, my:3}} onClick={() =>{deleteBooking(history._id);}}>
                Delete
              </Button>
            </Box>
            
          </Box>
        </Box></Paper>))
      :<Box>No bookings to show</Box>}
      
    </Box>
    <Footer/>
    </Box>);
}