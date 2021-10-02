import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';

import Center from './Center';

const NavBar = () => {
  return (
    <AppBar position="relative">
      <Toolbar variant="dense">
        <Center>
          <Typography variant="h5" color="inherit" component="div">
            <Link
              component={RouterLink}
              to="/"
              color="inherit"
              underline="none"
            >
              React Structured State
            </Link>
          </Typography>
        </Center>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
