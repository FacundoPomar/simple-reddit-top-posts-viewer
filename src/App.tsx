import React from 'react';
import './App.scss';
import { useSelector } from 'react-redux';
import { PostsState } from './stores/posts';
import AppNavbar from './components/AppNavbar/AppNavbar';
import PostsList from './components/PostsList/PostsList';
import { Post } from './models/post';
import PostDetails from './components/PostDetail/PostDetail';

const App: React.FC = () => {
  const selectedPost = useSelector<PostsState, Post | undefined>( state => state.selectedPost );

  return (
    <div className='app__container'>
      <AppNavbar />
      <div className='app__inner-container'>
        <div className='app__posts-container'>
          <PostsList />
        </div>
        <div className='app__post-detail-container'>
          <PostDetails post={selectedPost}/>
        </div>
      </div>
    </div>
  );
}

export default App;
