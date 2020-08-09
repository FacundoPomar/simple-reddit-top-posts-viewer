import React, { useEffect } from 'react';
import './App.scss';
import { useSelector } from 'react-redux';
import postsStore, { PostsState } from './stores/posts';
import { postsLoaded, postsLoading } from './actions/posts';
import PostItemLoading from './components/PostItemLoading/PostItemLoading';
import AppNavbar from './components/AppNavbar/AppNavbar';
import PostsList from './components/PostsList/PostsList';
import PostsService from './Services/Posts';

const App: React.FC = () => {
  const dataLoading = useSelector<PostsState, boolean>( state => state.postsLoading );

  useEffect( () => {
    ( async (): Promise<void> => {
      postsStore.dispatch( postsLoading( true ) );

      const postsResponse = await PostsService.loadPosts();

      const posts = postsResponse.data.children.map( child => child.data );

      postsStore.dispatch( postsLoaded( posts ) );

      postsStore.dispatch( postsLoading( false ) );
    })();
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
      { !dataLoading &&
        <PostsList />
      }
    </div>
  );
}

export default App;
