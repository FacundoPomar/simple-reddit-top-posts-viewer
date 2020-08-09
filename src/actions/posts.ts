import { Post } from "../models/post";

export enum PostActionTypes {
    POSTS_LOADED = 'postsLoaded',
    POSTS_LOADING = 'postsLoading'
}

export interface PostAction {
    type: PostActionTypes
};

export interface PostActionLoaded extends PostAction {
    payload: {
        posts: Post[]
    }
}

export interface PostActionLoading  extends PostAction {
    payload: {
        loading: boolean
    }
}

export const postsLoaded = ( posts: Post[] ): PostActionLoaded => {
    return {
        type: PostActionTypes.POSTS_LOADED,
        payload: {
            posts
        }
    };
}

export const postsLoading = ( loading: boolean ): PostActionLoading => {
    return {
        type: PostActionTypes.POSTS_LOADING,
        payload: {
            loading
        }
    };
}