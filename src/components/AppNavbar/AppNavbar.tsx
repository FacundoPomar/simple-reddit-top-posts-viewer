import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const AppNavbar: React.FC = () => (
  <AppBar position='sticky'>
    <Toolbar>
      <Typography variant='h6'>
        Reddit Top posts
      </Typography>
    </Toolbar>
  </AppBar>
);

export default AppNavbar;