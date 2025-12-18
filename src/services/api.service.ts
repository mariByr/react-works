import type {IPostModel} from "../models/postModel.ts";

const endpointPost=import.meta.env.VITE_API_BASE_URL +'/posts';

const loadPosts= async ():Promise<IPostModel[]>=>{
    return await fetch(endpointPost)
    .then(res => res.json())

}
export {loadPosts};
