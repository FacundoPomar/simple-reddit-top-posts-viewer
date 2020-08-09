import { Post } from "../models/post";

export interface PostsFetchChild {
  data: Post
}

export interface PostsFetchResponse {
  data: {
    children: PostsFetchChild[]
  }
}

class PostsService {

  static async loadPosts(): Promise<PostsFetchResponse> {
    return fetch( 'https://www.reddit.com/top.json?&limit=25&raw_json=1' )
      .then( response => response.json() )
  }
};

export default PostsService;