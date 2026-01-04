import type {PostResponse} from "../models/PostResponse.ts";
import type {IPostModel} from "../models/PostModel.ts";


const endpointPost=import.meta.env.VITE_API_BASE_URL +'/posts';

const loadPosts= async ():Promise<IPostModel[]>=>{
    const response:PostResponse =await fetch(endpointPost)
        .then(value => value.json())
    return response.posts
}
export {loadPosts};
