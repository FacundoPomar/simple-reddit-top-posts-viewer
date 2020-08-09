import React from 'react';
import { Post } from '../../models/post';
import { Typography } from '@material-ui/core';
import './PostItem.scss';
import PostItemLayout from '../PostItemLayout/PostItemLayout';
import DatesUtil from '../../utils/datesUtil';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export interface PostItemProps {
  post: Post;
  onClick: () => void;
  selected?: boolean;
  onDismiss?: ( post: Post ) => void;
}

const PostItem: React.FC<PostItemProps> = ( { selected, post, onClick, onDismiss } ) => {
  return (
    <PostItemLayout selected={selected}>
      <div
        className='post-item__inner-container'
        onClick={onClick}>
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
          { !post.read &&
            <div className='post-item__new-post'>
              <NewReleasesIcon color='secondary'/>
              <span className='post-item__new-post-label'>
                New Post !
              </span>
            </div>
          }
          { onDismiss &&
            <div className='post-item__dismiss-button'>
              <HighlightOffIcon onClick={() => {
                if ( onDismiss ) {
                  onDismiss( post );
                }
              }}/>
            </div>
          }
        </div>
        {post.thumbnail &&
          <img
            className='post-item__thumbnail'
            width={140}
            src={post.thumbnail}
            alt={post.title} />
        }
      </div>
    </PostItemLayout>
  )
};

export default PostItem;