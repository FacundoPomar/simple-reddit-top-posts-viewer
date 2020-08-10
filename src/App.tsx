import React from 'react';
import './App.scss';
import { useSelector } from 'react-redux';
import { PostsState } from './stores/posts';
import AppNavbar from './components/AppNavbar/AppNavbar';
import { Post } from './models/post';
import PostDetails from './components/PostDetail/PostDetail';
import { Drawer, IconButton, Divider, Typography } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import PostsList from './components/PostsList/PostsList';

const App: React.FC = () => {
  const selectedPost = useSelector<PostsState, Post | undefined>( state => state.selectedPost );
  const [open, setOpen] = React.useState(true);

  const handleDrawerToggle = () => {
    setOpen( !open );
  };

  const onPostSelection = () => {
    setOpen( false );
  };

  let containerClasses = 'app__container';

  containerClasses += open ? ' app__container--sidenav-opened' : '';

  return (
    <div className={containerClasses}>
      <AppNavbar onMenuToggle={handleDrawerToggle}/>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        className='app__drawer'>
        <div className='app__posts-container'>
          <div className='app__posts-container-title'>
            <IconButton onClick={handleDrawerToggle}>
              <ChevronLeftIcon />
            </IconButton>
            <Typography
              variant='subtitle1'
              component='span'>
              Checkout Your Top Posts!
            </Typography>
          </div>
          <Divider />
          <Divider />
          <PostsList onSelection={onPostSelection}/>
        </div>
      </Drawer>
      <div className='app__inner-container'>
        <div className='app__post-detail-container'>
          <PostDetails post={selectedPost}/>
        </div>
      </div>
    </div>
  );
}

export default App;
