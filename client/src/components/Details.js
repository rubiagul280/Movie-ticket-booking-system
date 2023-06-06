import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {useLocation} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Alert from '@mui/material/Alert';

const CTextField = styled(TextField)({
    //   '& label.Mui-focused': {
    //     color: 'blue',
    //   },
    //   '& .MuiInput-underline:after': {
    //     borderBottomColor: 'blue',
    //   },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'blue',
        },
    },
});
export default function Details(props) {
    const location = useLocation();
    // const { image } = props.location.image;

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange =
        (prop) => (event) => {
            setValues({ ...values, [prop]: event.target.value });
        };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    const navigation = useNavigate();
    React.useEffect(() => {if (!location.state) navigation('/')},[]);

    const [noOfSeats,setNoOfSeats]=React.useState(1);
    const [auditoriums,setAuditoriums]=React.useState([]);
    const [auditorium,setAuditorium]=React.useState([]);
    const [movieShows,setMovieShows]=React.useState([]);
    const [movieshow,setMovieshow]=React.useState([]);

    const [error, setError] = React.useState({
        status:false,
        msg:'',
        type:'',
        label:''
      });

    async function populateAuditoriums(){
        const req=await fetch('http://localhost:8000/auditoriums',{
          headers:{
            'x-access-token':localStorage.getItem('token'),
          },
        })
        const data=await req.json();
        if(data.status==='ok'){
          setAuditoriums(data.auditoriums);
        }
        else{
          alert(data.error);
        }
        // console.log('Auditoriums',data);
      }

    //   async function populateMovieShows(){
    //     const req=await fetch('http://localhost:8000/movieshows/'+location.state.label,{
    //       headers:{
    //         'x-access-token':localStorage.getItem('token'),
    //       },
    //     })
    //     const data=await req.json();
    //     if(data.status==='ok'){
    //       setMovieShows(data.movieshows);
    //     }
    //     else{
    //       alert(data.error);
    //     }
    //     console.log('Movie Shows',data);
    //   }

    async function populateMovieShows(){
        console.log(auditorium);
        const req=await fetch('http://localhost:8000/movieshows/'+location.state.label+'/'+auditorium._id,{
          headers:{
            'x-access-token':localStorage.getItem('token'),
          },
        })
        const data=await req.json();
        if(data.status==='ok'){
          setMovieShows(data.movieshows);
        }
        else{
          alert(data.error);
        }
        console.log('Movie Shows',data);
      }

      React.useEffect(() => {populateAuditoriums();},[])
      React.useEffect(() => {populateMovieShows();},[auditorium])


    async function addBooking(){
        // event.preventDefault();
        if(!auditorium._id){
            setError({status:true,msg:'Please select auitorium', type:'error', label:'Error'});
          }
          else if(!movieshow._id){
            setError({status:true,msg:'Please select movie show', type:'error', label:'Error'});
          }
          else{
            const req=await fetch('http://localhost:8000/seatsavailable/'+movieshow._id+'/'+noOfSeats,{
                headers:{
                    'x-access-token':localStorage.getItem('token'),
                },
            })
            const data=await req.json();
            if(data.status==='error'){
                if (data.available_seats==0){
                    setError({status:true,msg:'No Seats Available', type:'error', label:'Error'});
                }
                else{
                    setError({status:true,msg:'Only '+data.available_seats+' Seats Available', type:'info', label:'Info'});
                }
            }
            else{
                const req=await fetch('http://localhost:8000/addbooking',{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json',
                        'x-access-token':localStorage.getItem('token'),
                    },
                    body: JSON.stringify({
                        no_of_seats:noOfSeats,
                        movieshowid: movieshow._id,
                    })
                })
                const data=await req.json();
                if(data){
                    setError({status:true,msg:'Booking Done Successfully', type:'success', label:'Success'});
                    // alert("Booking done successfully");
                }
                else{
                    alert(data.error);
                }
                console.log(data);
            }
        }
    }

    return (
        <Box>
        {location.state?<Paper style={{
            backgroundImage: 'url('+location.state.backgroundImage+')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            backgroundAttachment: 'fixed',
            overflow: 'auto',
            paddingBottom: 60, position: 'relative'
        }}>
            <Header/>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",

            }}>
                <Box sx={{
                    mt: 1, backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    borderRadius: 10,
                    mx: '25%',
                    px: '10%',
                    my: '4%',
                    py: '4%',
                    boxShadow: 3, color: 'white',
                }}>
                    <img src={location.state.titleImage} height={200} width={400}></img>
                    {error.status &&(
          <Box>
            <Alert severity={error.type} sx={{py:2, my:2}}>{error.msg}</Alert>
          </Box>
        )}
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 400 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Movie Name</TableCell>
                                    <TableCell align="right">{location.state.label}</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow

                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        Auditorium
                                    </TableCell>
                                    <TableCell align="right">
                                    <FormControl fullWidth>
                                            <InputLabel id="auditorium">Select Auditorium</InputLabel>
                                            <Select
                                                labelId="auditorium"
                                                id="auditorium"

                                                label="Auditorium"
                                                value={auditorium}
                                                onChange={(e)=>{setAuditorium(e.target.value);}}

                                            >
                                                {auditoriums.map(auditorium=>(<MenuItem value={auditorium}>{auditorium.name}</MenuItem>))}
                                                
                                            </Select>
                                        </FormControl>
                                    </TableCell>

                                </TableRow>
                                <TableRow

                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        Date and Time
                                    </TableCell>
                                    <TableCell align="right">
                                        <FormControl fullWidth>
                                            <InputLabel id="time">Select Date and Time</InputLabel>
                                            <Select
                                                labelId="time"
                                                id="time"

                                                label="Time"
                                                value={movieshow}
                                                onChange={(e)=>setMovieshow(e.target.value)}

                                            >
                                                {movieShows.map(ms=>(<MenuItem value={ms}>Date: {ms.date} Time: {ms.startTime}-{ms.endTime}</MenuItem>))}
                                            </Select>
                                        </FormControl>
                                    </TableCell>

                                </TableRow>
                                <TableRow

                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        No of Seats
                                    </TableCell>
                                    <TableCell align="right">
                                        <TextField 
                                            type="number"
                                            InputProps={{
                                                inputProps: { 
                                                    min: 1, max:6
                                                }
                                            }}
                                            sx={{}}
                                            value={noOfSeats}
                                            onChange={(e)=>setNoOfSeats(e.target.value)}
                                            label="Seats"
                                        />
                                    </TableCell>

                                </TableRow>
                                <TableRow

                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        Amount
                                    </TableCell>
                                    <TableCell align="right">{(movieshow?.price)*noOfSeats}</TableCell>

                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={()=>{addBooking()}}
                    >
                        Book Now
                    </Button>
                </Box>
            </Box>
            <Footer/>
        </Paper>
        :<Box></Box>}</Box>
    );
}