import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import PostItemContainer from '../PostItemContainer/PostItemContainer';
import './PostItemLoading.scss';

const PostItemLoading: React.FC = () => (
  <PostItemContainer>
    <div className='post-item-loading'>
      <div className='post-item-loading__info-container'>
        <div>
          <Skeleton
            animation='wave'
            variant='text'
            width='20%'
            height={40} />
        </div>
        <div>
          <Skeleton
            animation='wave'
            variant='text'
            width='100%'
            height={40} />
          <Skeleton
            animation='wave'
            variant='text'
            width='100%'
            height={40} />
        </div>
      </div>
      <div className='post-item-loading__thumbnail-container'>
        <Skeleton
              animation='wave'
              variant='rect'
              width='100%'
              height='100%' />
      </div>
    </div>
  </PostItemContainer>
);

export default PostItemLoading;