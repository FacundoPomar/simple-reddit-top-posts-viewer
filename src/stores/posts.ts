import { createStore } from "redux";
import { postsReducer } from "../reducers/posts";
import { Post } from "../models/post";
import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly';

export interface PostsState {
    posts: Post[];
    postsLoading: boolean;
}

export const defaultPostsState: PostsState = {
    posts: [],
    postsLoading: false
}

const postsStore = createStore(postsReducer, /* preloadedState, */ devToolsEnhancer( {} ));

export default postsStore;