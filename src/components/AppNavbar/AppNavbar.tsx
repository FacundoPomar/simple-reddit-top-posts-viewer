import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export interface AppNavbarProps {
  onMenuToggle: () => void;
}

const AppNavbar: React.FC<AppNavbarProps> = ( { onMenuToggle } ) => (
  <AppBar position='sticky'>
    <Toolbar>
      <IconButton
        edge="start"
        color="inherit"
        onClick={onMenuToggle}
        aria-label="togle posts">
        <MenuIcon />
      </IconButton>
      <Typography variant='h6'>
        Reddit Top posts
      </Typography>
    </Toolbar>
  </AppBar>
);

export default AppNavbar;