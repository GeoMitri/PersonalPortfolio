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
import CssBaseline from '@mui/material/CssBaseline';
import { Color, Grid } from '@mui/material';

const pages = ['Home', 'Projects', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function colorPerPage(index: number){
    switch(index) { 
      case 0: { 
        return("player1")
      } 
      case 1: { 
        return("player2")
      } 
      case 2: { 
        return("player3")
      }
      case 3: { 
        return("player4")
      }  
      default: { 
        return("player1")
      } 
   } 
  }
  
  return (
    <AppBar position="sticky" sx={{backgroundColor:"neutral.light"}}>
      <CssBaseline>
        <Container maxWidth="xl" sx={{height: 70}}>
          <Toolbar disableGutters>
            {/* Desktop */}
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/#/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'neutral.dark',
                textDecoration: 'none',
              }}
            >George Mitri
            </Typography>
            <Box sx={{flexGrow: 1, display: { xs: 'none', md: 'flex' }, height:70}}>
              {pages.map((page, i) => (
                <Button
                key={page}
                  href={(page === "Home") ? "/#/" : "/#/"+page.toString()}
                  
                  onClick={handleCloseNavMenu}
                  color={colorPerPage(i)}
                  variant="text"
                  sx={{height:"100%"}}
                >
                  <Typography fontWeight={"500"} letterSpacing={1.5}>
                    {page}
                  </Typography>
                </Button>
              ))}
            </Box>

            <Button color='player4' disableElevation variant='contained' sx={{ my: 2, display: {xs: "none", md: 'block'}}}>
              Download CV
            </Button>

            {/* Mobile */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="secondary"
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
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Button href={(page === "Home") ? "/#/" : "/#/"+page.toString()}>
                    <Typography textAlign="center">{page}</Typography>
                    </Button>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h4"
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow:1,
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'neutral.dark',
                textDecoration: 'none',
              }}>
              George Mitri
            </Typography>
          </Toolbar>
        </Container>
      </CssBaseline>
    </AppBar>
  );
};
export default ResponsiveAppBar;
