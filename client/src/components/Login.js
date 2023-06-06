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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import Header from './Header';
import Footer from './Footer';
import Alert from '@mui/material/Alert';

const CTextField = styled(TextField)({
  // '& label.Mui-focused': {
  //   color: 'blue',
  // },
  // '& .MuiInput-underline:after': {
  //   borderBottomColor: 'blue',
  // },
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
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const [email,setEmail]=React.useState("");
  const [password,setPassword]=React.useState("");

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
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  async function loginUser(event){
    event.preventDefault();
    if(!email){
      setError({status:true,msg:'Email is required', type:'error', label:'Error'});
    }
    else if(!password){
      setError({status:true,msg:'Password is required', type:'error', label:'Error'});
    }
    else{
      const response = await fetch("http://localhost:8000/api/login",{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
        email,
        password,
      }),
    });
    const data=await response.json();
    if(data.user){
      localStorage.setItem('token',data.user);
      setError({status:true,msg:'Login Successfull', type:'success', label:'Success'});
      // alert('Login Successfull!');
      window.location.href="/";
    }
    else{
      setError({status:true,msg:'Please check your username and password', type:'error', label:'Error'});
      // alert('Please check your username and password');
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
      paddingBottom:60, position:'relative'
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
        <Typography component="h1" variant="h5"sx={{color:'blue',}}>
          Sign in
        </Typography>
        <Box component="form" noValidate onSubmit={loginUser} sx={{ mt: 1, color:'white', }}>
        {error.status &&(
          <Box>
            <Alert severity={error.type} >{error.msg}</Alert>
          </Box>
        )}
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
            onChange={e=>{setEmail(e.target.value)}}
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
            onChange={e=>{setPassword(e.target.value)}}
          />
          <FormControlLabel
            control={<Checkbox value="remember" sx={{color:"white"}}/>}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
        </Box>
        <Footer/>
    </Paper>
  );
}