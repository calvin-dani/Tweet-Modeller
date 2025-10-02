import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
  IconButton,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  Dashboard as DashboardIcon,
  Assessment as AssessmentIcon,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    handleMenuClose();
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: 'white', color: 'text.primary' }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            color: 'primary.main',
            fontSize: '1.5rem',
          }}
        >
          Tweet Modeller
        </Typography>
        
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Button
            color="inherit"
            startIcon={<HomeIcon />}
            onClick={() => navigate('/')}
            sx={{
              color: isActive('/') ? 'primary.main' : 'text.primary',
              fontWeight: isActive('/') ? 'bold' : 'normal',
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            startIcon={<InfoIcon />}
            onClick={() => navigate('/about')}
            sx={{
              color: isActive('/about') ? 'primary.main' : 'text.primary',
              fontWeight: isActive('/about') ? 'bold' : 'normal',
            }}
          >
            About
          </Button>
          <Button
            color="inherit"
            startIcon={<DashboardIcon />}
            onClick={() => navigate('/dashboard')}
            sx={{
              color: isActive('/dashboard') ? 'primary.main' : 'text.primary',
              fontWeight: isActive('/dashboard') ? 'bold' : 'normal',
            }}
          >
            Dashboard
          </Button>
          <Button
            color="inherit"
            startIcon={<AssessmentIcon />}
            onClick={() => navigate('/results')}
            sx={{
              color: isActive('/results') ? 'primary.main' : 'text.primary',
              fontWeight: isActive('/results') ? 'bold' : 'normal',
            }}
          >
            Results
          </Button>
        </Box>

        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={() => handleNavigation('/')}>
              <HomeIcon sx={{ mr: 1 }} />
              Home
            </MenuItem>
            <MenuItem onClick={() => handleNavigation('/about')}>
              <InfoIcon sx={{ mr: 1 }} />
              About
            </MenuItem>
            <MenuItem onClick={() => handleNavigation('/dashboard')}>
              <DashboardIcon sx={{ mr: 1 }} />
              Dashboard
            </MenuItem>
            <MenuItem onClick={() => handleNavigation('/results')}>
              <AssessmentIcon sx={{ mr: 1 }} />
              Results
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

