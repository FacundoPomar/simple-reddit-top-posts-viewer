import { Post } from "../interfaces/post";

export enum PostActionTypes {
    POSTS_LOADED = 'postsLoaded'
}

export type PostAction = {
    type: PostActionTypes,
    payload: {
        posts: Post[]
    }
};