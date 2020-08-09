export interface Post {
    author: string;
    title: string;
    id: string;
    thumbnail?: string,
    created_utc: number;
    num_comments: number;
}

export interface PostsSlice {
    current: string;
}