import React from 'react';
import './PostItemLayout.scss';
import { Paper } from '@material-ui/core';

export interface PostItemLayoutProps {
  selected?: boolean
}

const PostItemLayout: React.FC<PostItemLayoutProps> = ( { selected, children } ) => (
  <Paper
    className='post-item-layout'
    elevation={selected ? 24 : 2}>
    <div className='post-item-layout__inner-container'>
      { children }
    </div>
  </Paper>
);

PostItemLayout.defaultProps = {
  selected: false
};

export default PostItemLayout;