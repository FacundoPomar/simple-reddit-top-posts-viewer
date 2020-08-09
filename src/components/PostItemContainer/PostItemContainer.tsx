import React from 'react';
import './PostItemContainer.scss';
import { Paper } from '@material-ui/core';

const PostItemContainer: React.FC = ( { children } ) => (
  <Paper
    className='post-item-container'
    elevation={6}>
    <div className='post-item-container__inner-container'>
      { children }
    </div>
  </Paper>
);

export default PostItemContainer;