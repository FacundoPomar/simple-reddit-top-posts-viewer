import React, { useEffect } from 'react';
import './App.scss';
import { useSelector } from 'react-redux';
import postsStore, { PostsState } from './stores/posts';
import { postsLoaded, postsLoading, postSelected } from './actions/posts';
import PostItemLoading from './components/PostItemLoading/PostItemLoading';
import AppNavbar from './components/AppNavbar/AppNavbar';
import PostsList from './components/PostsList/PostsList';
import PostsService, { PostsFetchRequest } from './Services/Posts';
import { Button } from '@material-ui/core';
import { PostsSlice, Post } from './models/post';
import PostItemLayout from './components/PostItemLayout/PostItemLayout';
import PostDetails from './components/PostDetail/PostDetail';

const App: React.FC = () => {
  const dataLoading = useSelector<PostsState, boolean>( state => state.postsLoading );
  const currentSlice = useSelector<PostsState, PostsSlice>( state => state.slice );
  const selectedPost = useSelector<PostsState, Post | undefined>( state => state.selectedPost );

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

  const onPostSelection = ( post: Post ): void => {
    postsStore.dispatch( postSelected( post ) );
  }

  return (
    <div className='app__container'>
      <AppNavbar />
      <div className='app__inner-container'>
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
            <PostsList onSelection={onPostSelection}/>
            <PostItemLayout>
              <div className='app__posts-pagination'>
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
              </div>
            </PostItemLayout>
            </>
          }
        </div>
        <div className='app__post-detail-container'>
          <PostDetails post={selectedPost}/>
        </div>
      </div>
    </div>
  );
}

export default App;
