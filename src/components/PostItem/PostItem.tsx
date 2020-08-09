import React from 'react';
import { Post } from '../../models/post';
import { Typography } from '@material-ui/core';
import './PostItem.scss';
import PostItemContainer from '../PostItemContainer/PostItemContainer';
import DatesUtil from '../../utils/datesUtil';

export interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ( { post } ) => {
  return (
    <PostItemContainer>
      <div className='post-item__info'>
        <div>
          <Typography variant='subtitle1'>
            Title: {post.title}
          </Typography>
        </div>
        <div>
          <Typography variant='subtitle2'>
            Author: {post.author}
          </Typography>
        </div>
        <div>
          <Typography variant='overline'>
            Entry Date: {DatesUtil.getTimeAgo( new Date(post.created_utc) )}
          </Typography>
        </div>
        <div>
          <Typography variant='caption'>
            {post.num_comments} comment/s
          </Typography>
        </div>
      </div>
      {post.thumbnail &&
        <img
          className='post-item__thumbnail'
          width={140}
          src={post.thumbnail}
          alt={post.title} />
      }
    </PostItemContainer>
  )
};

export default PostItem;