import { Post } from "../models/post";

export enum PostActionTypes {
    POSTS_LOADED = 'postsLoaded',
    POSTS_LOADING = 'postsLoading',
    POST_SELECTED = 'postSelected'
}

export interface PostAction {
    type: PostActionTypes
};

export interface PostActionLoaded extends PostAction {
    payload: {
        posts: Post[],
        slice: string
    }
}

export interface PostActionLoading  extends PostAction {
    payload: {
        loading: boolean
    }
}

export interface PostActionSelected  extends PostAction {
    payload: {
        post: Post
    }
}

export const postsLoaded = ( posts: Post[], slice: string ): PostActionLoaded => {
    return {
        type: PostActionTypes.POSTS_LOADED,
        payload: {
            posts,
            slice
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

export const postSelected = ( post: Post ): PostActionSelected => {
    return {
        type: PostActionTypes.POST_SELECTED,
        payload: {
            post
        }
    };
}
