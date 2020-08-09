import React, { useEffect } from 'react';
import './App.scss';
import { useSelector } from 'react-redux';
import postsStore, { PostsState } from './stores/posts';
import { postsLoaded, postsLoading } from './actions/posts';
import PostItemLoading from './components/PostItemLoading/PostItemLoading';
import AppNavbar from './components/AppNavbar/AppNavbar';
import PostsList from './components/PostsList/PostsList';
import PostsService, { PostsFetchRequest } from './Services/Posts';
import { Button } from '@material-ui/core';
import { PostsSlice } from './models/post';
import PostItemContainer from './components/PostItemContainer/PostItemContainer';

const App: React.FC = () => {
  const dataLoading = useSelector<PostsState, boolean>( state => state.postsLoading );
  const currentSlice = useSelector<PostsState, PostsSlice>( state => state.slice );

  useEffect( () => {
    loadPosts();
  }, []);

  const loadPosts = async ( options?: PostsFetchRequest ) => {
    postsStore.dispatch( postsLoading( true ) );

    const postsResponse = await PostsService.loadPosts( options );

    const posts = postsResponse.data.children.map( child => child.data );
    const newSlice = postsResponse.data.after || '';

    postsStore.dispatch( postsLoaded( posts, newSlice ) );

    postsStore.dispatch( postsLoading( false ) );
  };

  const onPrev = () => {
    loadPosts({
      before: currentSlice.current
    });
  };

  const onNext = () => {
    loadPosts({
      after: currentSlice.current
    });
  };

  return (
    <div className='app__container'>
      <AppNavbar />
      <div className='app__posts-container'>
        { dataLoading &&
          <>
            <PostItemLoading />
            <PostItemLoading />
            <PostItemLoading />
          </>
        }
        { !dataLoading &&
          <>
          <PostsList />
          <PostItemContainer>
            <Button
              variant='contained'
              color='secondary'
              onClick={onPrev}>
              Prev
            </Button>
            <Button
              variant='contained'
              color='secondary'
              onClick={onNext}>
              Next
            </Button>
          </PostItemContainer>
          </>
        }
      </div>
    </div>
  );
}

export default App;
