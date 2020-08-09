import React, { useEffect } from 'react';
import { Post, PostsSlice } from '../../models/post';
import { useSelector } from 'react-redux';
import postsStore, { PostsState } from '../../stores/posts';
import PostItem from '../PostItem/PostItem';
import PostItemLayout from '../PostItemLayout/PostItemLayout';
import { Typography, Button } from '@material-ui/core';
import { postDismissed, postSelected, postsLoading, postsLoaded } from '../../actions/posts';
import PostsService, { PostsFetchRequest } from '../../Services/Posts';
import './PostsList.scss';
import PostItemLoading from '../PostItemLoading/PostItemLoading';

const PostsList: React.FC = () => {
  const posts = useSelector<PostsState, Post[]>( state => state.posts );
  const selectedPost = useSelector<PostsState, Post | undefined>( state => state.selectedPost );
  const currentSlice = useSelector<PostsState, PostsSlice>( state => state.slice );
  const dataLoading = useSelector<PostsState, boolean>( state => state.postsLoading );

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

  const isPostSelected = ( post: Post ): boolean => {
    return post.id === selectedPost?.id;
  };

  const onDismiss = ( post: Post ) => {
    postsStore.dispatch( postDismissed( post ) );
  };

  const onPostSelection = ( post: Post ): void => {
    postsStore.dispatch( postSelected( post ) );
  }

  return (
    <>
      { (!posts.length && !dataLoading) &&
        <PostItemLayout>
          <Typography variant='subtitle1'>
            No posts to show.
          </Typography>
        </PostItemLayout>
      }
      { dataLoading &&
        <>
          <PostItemLoading />
          <PostItemLoading />
          <PostItemLoading />
        </>
          }
      { !dataLoading && posts.map( post =>
        <PostItem
          key={post.id}
          selected={isPostSelected( post )}
          onClick={(): void => {
            onPostSelection( post );
          }}
          onDismiss={(): void => {
            onDismiss( post );
          }}
          post={post} />
      )}
      <PostItemLayout>
        <div className='posts-list__posts-pagination'>
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
  );
};

export default PostsList;