import { Post } from "../models/post";

export interface PostsFetchChild {
  data: Post;
}

export interface PostsFetchResponse {
  data: {
    children: PostsFetchChild[];
    after: string;
    before: string | null;
  };
}

export interface PostsFetchRequest {
  limit?: number;
  raw_json?: number;
  after?: string;
  before?: string;
}

const defaultPostsFetchRequest: PostsFetchRequest = {
  limit: 5,
  raw_json: 1,
  after: '',
  before: ''
}

class PostsService {
  static baseApi = 'https://www.reddit.com';
  static topPosts = '/top.json';

  static async loadPosts( options?: PostsFetchRequest ): Promise<PostsFetchResponse> {

    const paramsOptions = Object.assign( {}, defaultPostsFetchRequest, options );

    // To avoid doing an append for each possible param of the rests, threat all options of the
    // request as a dynamic list.
    const values = Object.values( paramsOptions );
    const params = Object.keys( paramsOptions )
      .map( ( key: string, i: number ) => `${key}=${values[i]}`)
      .join('&');

    let url = `${this.baseApi}${this.topPosts}`;

    if ( params ) {
      url += `?${params}`;
    }

    return fetch( url )
      .then( response => response.json() )
  }
};

export default PostsService;