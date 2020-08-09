import React from 'react';
import { Card, CardHeader, Avatar, CardMedia, CardContent, Typography } from '@material-ui/core';
import { Post } from '../../models/post';
import DatesUtil from '../../utils/datesUtil';
import './PostDetail.scss';

export interface PostDetailsProps {
  post?: Post;
}

const PostDetails: React.FC<PostDetailsProps> = ( { post } ) => {

  return (
    <Card>
      { post &&
        <>
          <CardHeader
            avatar={
              <Avatar aria-label={post.author}>
                {post.author[0].toUpperCase()}
              </Avatar>
            }
            title={post.title}
            subheader={DatesUtil.getTimeAgo( new Date(post.created_utc) )}
          />
          { post.url &&
            <CardMedia title={post.title}>
              { !post.media &&
                <img
                  className='post-detail__image'
                  alt={post.title}
                  src={post.url} />
              }
              { post.media &&
                <div className='post-detail__video'>
                  <video
                    controls={true}
                    width={post.media.reddit_video.width}
                    height={post.media.reddit_video.height}
                    src={post.media.reddit_video.fallback_url} />
                </div>

              }
            </CardMedia>
          }
        </>
      }
      <CardContent>
        { !post &&
          <Typography
            variant='h3'
            color='textPrimary'>
            Choose a Post to checkout its details
          </Typography>
        }
      </CardContent>
    </Card>
  );
};

export default PostDetails;