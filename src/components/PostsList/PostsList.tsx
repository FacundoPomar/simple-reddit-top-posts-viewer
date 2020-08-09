import React from 'react';
import { Post } from '../../models/post';
import { useSelector } from 'react-redux';
import { PostsState } from '../../stores/posts';
import PostItem from '../PostItem/PostItem';
import PostItemContainer from '../PostItemContainer/PostItemContainer';
import { Typography } from '@material-ui/core';

export interface PostsListProps {
  onSelection: ( post: Post ) => void;
}

const PostsList: React.FC<PostsListProps> = ({ onSelection }) => {
  const posts = useSelector<PostsState, Post[]>(state => state.posts);

  return (
    <>
      { !posts.length &&
        <PostItemContainer>
          <Typography variant='subtitle1'>
            No posts to show.
          </Typography>
        </PostItemContainer>
      }
      { posts.map( post =>
        <PostItem
          key={post.id}
          onClick={() => {
            onSelection( post );
          }}
          post={post} />
      )}
    </>
  );
};

export default PostsList;