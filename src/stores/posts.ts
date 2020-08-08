import { createStore } from "redux";
import { postsReducer } from "../reducers/posts";
import { Post } from "../interfaces/post";

export interface PostsState {
    posts: Post[];
}

export const defaultPostsState: PostsState = {
    posts: []
}

const postsStore = createStore(postsReducer);

export default postsStore;