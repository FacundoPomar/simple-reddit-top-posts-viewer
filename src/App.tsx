import React from 'react';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import './App.css';
import { Typography } from '@material-ui/core';

function App() {
  return (
    <div className='app__container'>
      <div>
        <Typography variant='h1'>
          Showing Material
        </Typography>
      </div>
      <div className='app__logo-container'>
        <AllInclusiveIcon fontSize='inherit' />
      </div>
    </div>
  );
}

export default App;
