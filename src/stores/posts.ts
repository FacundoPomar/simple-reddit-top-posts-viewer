import { createStore } from "redux";
import { postsReducer } from "../reducers/posts";
import { Post, PostsSlice } from "../models/post";
import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly';

export interface PostsState {
    posts: Post[];
    selectedPost?: Post;
    postsLoading: boolean;
    slice: PostsSlice;
}

export const defaultPostsState: PostsState = {
    posts: [],
    postsLoading: false,
    slice: {
        current: ''
    }
}

const postsStore = createStore(postsReducer, /* preloadedState, */ devToolsEnhancer( {} ));

export default postsStore;