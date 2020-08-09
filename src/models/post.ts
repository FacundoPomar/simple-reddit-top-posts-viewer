export interface PostMediaVideo {
    fallback_url: string;
    width: number;
    height: number;
}

export interface PostMedia {
    reddit_video: PostMediaVideo;
}

export interface Post {
    author: string;
    title: string;
    id: string;
    thumbnail?: string,
    created_utc: number;
    num_comments: number;
    url?: string;
    media?: PostMedia;
}

export interface PostsSlice {
    current: string;
}