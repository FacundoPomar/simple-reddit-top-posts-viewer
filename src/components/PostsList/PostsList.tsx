import React from 'react';
import { Post } from '../../models/post';
import { useSelector } from 'react-redux';
import { PostsState } from '../../stores/posts';
import PostItem from '../PostItem/PostItem';
import PostItemContainer from '../PostItemContainer/PostItemContainer';
import { Typography } from '@material-ui/core';

const PostsList: React.FC = () => {
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
          post={post} />
      )}
    </>
  );
};

export default PostsList;