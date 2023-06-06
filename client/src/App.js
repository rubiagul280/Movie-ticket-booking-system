import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import {Routes, Route, Navigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import History from './components/History';
import Search from './components/Search';
import Details from './components/Details';
function App() {
  var isLoggedIn = localStorage.getItem("token");
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={isLoggedIn?<Navigate to="/" />:<Login />} />
        <Route path='signup' element={isLoggedIn?<Navigate to="/" />:<Signup />} />
        <Route path='home' element={<Home />} />
        <Route path='history' element={isLoggedIn?<History />:<Navigate to="/login" />} />
        <Route path='search' element={<Search />} />
        <Route path='details' element={isLoggedIn?<Details />:<Navigate to="/login" />} />
      </Routes>
      
    </Box>
    </div>
  );
}

export default App;
