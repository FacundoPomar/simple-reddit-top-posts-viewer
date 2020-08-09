import React from 'react';
import { Post } from '../../models/post';
import { Typography } from '@material-ui/core';
import './PostItem.scss';
import PostItemContainer from '../PostItemContainer/PostItemContainer';

export interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ( { post } ) => (
  <PostItemContainer>
    <div className='post-item__info'>
      <Typography variant='subtitle1'>
        Title: {post.title}
      </Typography>
      <Typography variant='subtitle2'>
        Author: {post.author}
      </Typography>
      </div>
      {post.thumbnail &&
        <img
          className='post-item__thumbnail'
          width={140}
          src={post.thumbnail}
          alt={post.title} />
      }
  </PostItemContainer>
);

export default PostItem;