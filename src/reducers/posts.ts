import { Reducer } from "redux";
import { PostsState, defaultPostsState } from "../stores/posts";
import { PostAction, PostActionTypes } from "../actions/posts";

export const postsReducer: Reducer<PostsState, PostAction> =
    ( state: PostsState = defaultPostsState, action: PostAction ) => {

    switch (action.type) {
        case PostActionTypes.POSTS_LOADED:
            return { ...state, posts: action.payload.posts };
        default:
            return state;

    }
}