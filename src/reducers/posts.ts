import { Reducer } from "redux";
import { PostsState, defaultPostsState } from "../stores/posts";
import { PostAction, PostActionTypes, PostActionLoaded, PostActionLoading } from "../actions/posts";

export const postsReducer: Reducer<PostsState, PostAction> =
    ( state: PostsState = defaultPostsState, action: PostAction ) => {

    let actionObj;

    switch (action.type) {
        case PostActionTypes.POSTS_LOADED:
            actionObj = action as PostActionLoaded;
            return { ...state, posts: actionObj.payload.posts };
        case PostActionTypes.POSTS_LOADING:
            actionObj = action as PostActionLoading;
            return { ...state, postsLoading: actionObj.payload.loading };
        default:
            return state;
    }
}