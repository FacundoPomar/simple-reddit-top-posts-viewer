import React, { useEffect } from 'react';
import './App.scss';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import postsStore, { PostsState } from './stores/posts';
import { Post } from './models/post';
import { postsLoaded, postsLoading } from './actions/posts';
import PostItem from './components/PostItem/PostItem';
import PostItemLoading from './components/PostItemLoading/PostItemLoading';
import PostItemContainer from './components/PostItemContainer/PostItemContainer';
import AppNavbar from './components/AppNavbar/AppNavbar';

const App: React.FC = () => {
  const posts = useSelector<PostsState, Post[]>( state => state.posts );
  const dataLoading = useSelector<PostsState, boolean>( state => state.postsLoading );

  useEffect( () => {
    postsStore.dispatch( postsLoading( true ) );

    fetch( 'https://www.reddit.com/top.json?&limit=25&raw_json=1' )
      .then( response => response.json() )
      .then( res => {
        const posts = res.data.children.map( ( child: { data: Post } ) => child.data );

        postsStore.dispatch( postsLoaded( posts ) );
      })
      .finally( () => {
        postsStore.dispatch( postsLoading( false ) );
      });
  }, []);

  return (
    <div className='app__container'>
      <AppNavbar />
      { dataLoading &&
        <>
          <PostItemLoading />
          <PostItemLoading />
          <PostItemLoading />
        </>
      }
      { !dataLoading && !posts.length &&
        <PostItemContainer>
          <Typography variant='subtitle1'>
            No posts to show.
          </Typography>
        </PostItemContainer>
      }
      { !dataLoading && posts.map( post => (
        <PostItem
          key={post.id}
          post={post} />
      ) )}
    </div>
  );
}

export default App;
