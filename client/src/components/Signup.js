import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import Header from './Header';
import Footer from './Footer';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import AlertTitle from '@mui/material/AlertTitle';
import { useNavigate } from 'react-router-dom';

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
export default function Login() {
  const navigation=useNavigate();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
      const [name,setName]=React.useState("");
      const [email,setEmail]=React.useState("");
      const [password,setPassword]=React.useState("");
      const [cpassword,setCpassword]=React.useState("");
      const [open, setOpen] = React.useState(true);
      const [match,setMatch]=React.useState(true);
      const [error, setError] = React.useState({
        status:false,
        msg:'',
        type:'',
        label:''
      });
    
      // const handleChange =
      //   (prop) => (event) => {
      //     setValues({ ...values, [prop]: event.target.value });
      //   };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  async function registerUser(event){
    event.preventDefault();
    if (password!==cpassword){
      setError({status:true,msg:'Password and Confirm Password does not match', type:'error', label:'Error'});
      // alert("Password and Confirm Password doesn't match!");
    }
    else if(!name){
      setError({status:true,msg:'Name is required', type:'error', label:'Error'});
    }
    else if(!email){
      setError({status:true,msg:'Email is required', type:'error', label:'Error'});
    }
    else if(!password){
      setError({status:true,msg:'Password is required', type:'error', label:'Error'});
    }
    // else if(!cpassword){
    //   setError({status:true,msg:'Confirm Password is required', type:'error', label:'Error'});
    // }
    else{
      const response = await fetch("http://localhost:8000/api/register",{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
        name,
        email,
        password,
        cpassword
      }),
    });
    const data=await response.json();
    if(data.status==='ok'){
      navigation('/login');
    }
    }
  }


  return (
    <Paper style={{
      backgroundImage: 'url(/images/login-background.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      backgroundAttachment: 'fixed',
      overflow:'auto',
      paddingBottom: 60, position: 'relative'
    }}>
      <Header/>
      <Box sx={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'rgba(0, 0, 0, 0.8)',
        borderRadius:10,
        mx:'25%',
        px:'10%',
        my:'4%',
        py:'4%',
        boxShadow: 3,
      }}>
        <Avatar sx={{ m: 1, bgcolor: 'blue' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5"sx={{color: "blue",}}>
          Create an Account
        </Typography>
        <Box component="form" noValidate onSubmit={registerUser} sx={{ mt: 1, color:'white', }}>
        {error.status &&(
          <Box>
            <Alert severity={error.type} >{error.msg}</Alert>
       {/* <Collapse in={open}>
        <Alert
          severity={error.type}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          <AlertTitle>{error.label}</AlertTitle>
          {error.msg}
        </Alert>
       </Collapse> */}
      </Box>
      )}
        <CTextField
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle sx={{ color: 'white', mr: 1, my: 0.5 }}/>
                  </InputAdornment>
                ),
              }}
            margin="normal"
            required
            fullWidth
            name="name"
            label="Name"
            type="text"
            id="name"
            autoComplete="name"
            InputLabelProps={{ style: { color: "white" } }}
            sx={{ input: { color: 'white' } }} 
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <CTextField
           InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon sx={{ color: 'white', mr: 1, my: 0.5 }}/>
              </InputAdornment>
            ),
          }}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            InputLabelProps={{ style: { color: "white" } }}
            sx={{ input: { color: 'white' } }} 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <CTextField
           InputProps={{
            startAdornment: (
                <IconButton
                sx={{color:'white',mr: 1, my: 0.5}}
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ),
          }}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={values.showPassword ? 'text' : 'password'}
            id="password"
            autoComplete="current-password"
            InputLabelProps={{ style: { color: "white" } }}
            sx={{ input: { color: 'white' } }} 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <CTextField
          InputProps={{
            startAdornment: (
                <IconButton
                sx={{color:'white',mr: 1, my: 0.5}}
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ),
          }}
            margin="normal"
            required
            fullWidth
            name="cPassword"
            label="Confirm Password"
            type={values.showPassword ? 'text' : 'password'}
            id="cPassword"
            autoComplete="current-password"
            InputLabelProps={{ style: { color: "white" } }}
            sx={{ input: { color: 'white' } }} 
            value={cpassword}
            onChange={(e)=>setCpassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Box sx={{paddingLeft:10}}>
              <Link href="/login" variant="body2">
                {"Already have an account? Sign In"}
              </Link>
          </Box>
        </Box>
        </Box>
        <Footer/>
    </Paper>
  );
}