import React from 'react';
import { Post } from '../../models/post';
import { useSelector } from 'react-redux';
import postsStore, { PostsState } from '../../stores/posts';
import PostItem from '../PostItem/PostItem';
import PostItemLayout from '../PostItemLayout/PostItemLayout';
import { Typography } from '@material-ui/core';
import { postDismissed } from '../../actions/posts';

export interface PostsListProps {
  onSelection: ( post: Post ) => void;
}

const PostsList: React.FC<PostsListProps> = ({ onSelection }) => {
  const posts = useSelector<PostsState, Post[]>( state => state.posts );
  const selectedPost = useSelector<PostsState, Post | undefined>( state => state.selectedPost );

  const isPostSelected = ( post: Post ): boolean => {
    return post.id === selectedPost?.id;
  };

  const onDismiss = ( post: Post ) => {
    postsStore.dispatch( postDismissed( post ) );
  };

  return (
    <>
      { !posts.length &&
        <PostItemLayout>
          <Typography variant='subtitle1'>
            No posts to show.
          </Typography>
        </PostItemLayout>
      }
      { posts.map( post =>
        <PostItem
          key={post.id}
          selected={isPostSelected( post )}
          onClick={(): void => {
            onSelection( post );
          }}
          onDismiss={(): void => {
            onDismiss( post );
          }}
          post={post} />
      )}
    </>
  );
};

export default PostsList;