import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import HistoryIcon from '@mui/icons-material/History';
import { useLocation } from 'react-router-dom';

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    action: {
      // disabledBackground: 'red', 
      disabled: "#616161", // set the disable foreground color
    }
  }
});

const pages = ['Home', 'Search', 'History'];
const settings = ['Create Account', 'Log In'];

const Header = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  let icon = "HomeIcon";

  const [islogin,setIslogin]= React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      setIslogin(true);
    }
  },[])

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black', }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <img src='./images/logo.svg' height={70} width={70} onClick={()=>{navigation('../home');}}/></Box>
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => {
                  handleCloseNavMenu(); if (page === 'Home') { navigation('../home'); } else if (page === 'Search') { navigation('../search'); } else if (page === 'History') { navigation('../history') }
                }}>
                  <Typography textAlign="center" variant="h6" sx={{ fontWeight: 700, fontFamily: 'monospace', }}>
                    {page === 'Home' ? <HomeIcon sx={{ color: "black" }} /> : page === 'Search' ? <SearchIcon sx={{ color: "black" }} /> : <HistoryIcon sx={{ color: "black" }} />}
                    {page}</Typography>

                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
            <img src='./images/logo.svg' height={70} width={70} /></Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <ThemeProvider theme={theme}>
              <Button
                disabled={( page === 'History' ) && (location.pathname === '/signup' || location.pathname === '/login' || !islogin)}
                key={page}
                onClick={() => {
                  handleCloseNavMenu(); if (page === 'Home') { navigation('../home'); } else if (page === 'Search') { navigation('../search'); } else if (page === 'History') { navigation('../history') }
                }}
                sx={{
                  my: 2, color: 'white', fontWeight: 700, fontFamily: 'monospace',
                }}
              >
                {page === 'Home' ? <HomeIcon sx={{ color: "white" }} /> : page === 'Search' ? <SearchIcon sx={{ color: "white" }} /> : <HistoryIcon sx={{ color: "white" }} />}
                {page}
              </Button>
              </ThemeProvider>
            ))}
          </Box>
          {!islogin?
          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              onClick={handleOpenUserMenu} sx={{ p: 0, color: 'white', px: 2, py: 1, }}
            >
              Account
            </Button>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => {
                  handleCloseUserMenu(); if (setting === 'Log In') { navigation('../login'); } else if (setting === 'Create Account') { navigation('../signup') }
                }}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        : <Button variant="contained" sx={{ p: 0, color: 'white', px: 2, py: 1, }} onClick={()=>{localStorage.removeItem('token'); window.location.reload(); setIslogin(false); navigation('../login')}}>
            Log Out
        </Button>}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
