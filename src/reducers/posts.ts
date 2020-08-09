import { Reducer } from "redux";
import { PostsState, defaultPostsState } from "../stores/posts";
import { PostAction, PostActionTypes, PostActionLoaded, PostActionLoading, PostActionSelected, PostActionDismissed } from "../actions/posts";
import { PostsSlice, Post } from "../models/post";
import { cloneDeep, remove } from 'lodash';

export const postsReducer: Reducer<PostsState, PostAction> =
  ( state: PostsState = defaultPostsState, action: PostAction ) => {

  let actionObj;

  switch (action.type) {
    case PostActionTypes.POSTS_LOADED:
      actionObj = action as PostActionLoaded;

      const slice: PostsSlice = {
          current: actionObj.payload.slice
      };

      const postsList = [ ...actionObj.payload.posts ];
      const posts = postsList.map( ({ author, title, id, thumbnail, created_utc, num_comments, url, media } ) => {

        const post: Post = {
          author,
          title,
          id,
          thumbnail,
          created_utc,
          num_comments,
          url,
          media,
          read: false
        };

        // Make sure post timestamp is in the right format
        post.created_utc = post.created_utc * 1000

        return post;
      });

      return {
          ...state,
          posts,
          slice
      };
    case PostActionTypes.POSTS_LOADING:
      actionObj = action as PostActionLoading;
      return { ...state, postsLoading: actionObj.payload.loading };
    case PostActionTypes.POST_SELECTED:
      actionObj = action as PostActionSelected;

      const selectedPostId = actionObj.payload.post.id;
      const postsCopy = cloneDeep(state.posts);

      const selectedPost = postsCopy.find( postElem => postElem.id === selectedPostId );

      if ( selectedPost ) {
        selectedPost.read = true;
        return { ...state, posts: postsCopy, selectedPost };
      }
      return state;
    case PostActionTypes.POST_DISMISSED:
      actionObj = action as PostActionDismissed;

      const postIdToRemove = actionObj.payload.post.id;
      const oldPosts = cloneDeep(state.posts);
      const newPosts = remove( oldPosts, post => post.id !== postIdToRemove );

      return {
        ...state,
        posts: newPosts,
        selectedPost: undefined
      };
    case PostActionTypes.POSTS_DISMISS_ALL:
      return {
        ...state,
        posts: [],
        selectedPost: undefined
      }
    default:
      return state;
  }
}