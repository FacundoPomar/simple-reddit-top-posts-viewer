import { Reducer } from "redux";
import { PostsState, defaultPostsState } from "../stores/posts";
import { PostAction, PostActionTypes, PostActionLoaded, PostActionLoading } from "../actions/posts";

export const postsReducer: Reducer<PostsState, PostAction> =
    ( state: PostsState = defaultPostsState, action: PostAction ) => {

    let actionObj;

    switch (action.type) {
        case PostActionTypes.POSTS_LOADED:
            actionObj = action as PostActionLoaded;

            const posts = [ ...actionObj.payload.posts ];
            // Make sure post timestamp is in the right format
            posts.forEach( post => post.created_utc = post.created_utc * 1000);

            return { ...state, posts };
        case PostActionTypes.POSTS_LOADING:
            actionObj = action as PostActionLoading;
            return { ...state, postsLoading: actionObj.payload.loading };
        default:
            return state;
    }
}