import React, { useEffect } from 'react';
import './App.scss';
import { Typography, Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';
import postsStore, { PostsState } from './stores/posts';
import { Post } from './interfaces/post';
import { PostActionTypes } from './actions/posts';

const App: React.FC = () => {
  const posts = useSelector<PostsState, Post[]>( state => state.posts );

  useEffect( () => {

    fetch( 'https://www.reddit.com/top.json?&limit=25&raw_json=1' ).then( ( response ) => {
      response
        .json()
        .then( res => {
          const posts = res.data.children.map( ( child: { data: Post } ) => child.data );

          postsStore.dispatch({
            type: PostActionTypes.POSTS_LOADED,
            payload: {
              posts
            }
          });
        })
    });
  }, []);

  return (
    <div className='app__container'>
      <Paper
        className='app__item'
        elevation={6}>
        <div className='app__post-inner-container'>
          <Typography variant='h1'>
            Posts
          </Typography>
        </div>
      </Paper>
      { !posts.length &&
        <Paper
        className='app__item'
        elevation={6}>
          <div className='app__post-inner-container'>
            <Typography variant='subtitle1'>
              No posts to show.
            </Typography>
          </div>
        </Paper>
      }
      { posts.map( post => (
        <Paper
          className='app__item'
          key={post.id}
          elevation={6}>
          <div className='app__post-inner-container'>
            <div className='app__post-info'>
              <Typography variant='subtitle1'>
                Title: {post.title}
              </Typography>
              <Typography variant='subtitle2'>
                Author: {post.title}
              </Typography>
            </div>
            { post.thumbnail &&
              <img
                className='app__post-thumbnail'
                width={140}
                src={post.thumbnail}
                alt={post.title}/>
            }
          </div>
        </Paper>
      ) )}
    </div>
  );
}

export default App;
