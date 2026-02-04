import axios from "axios";
import type {IPost} from "../models/IPost.ts";
import type {IComent} from "../models/IComent.tsx";



const axiousInstance=axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers:{'Content-Type': 'application/json',}
})
export const getPosts=async():Promise<IPost[]>=>{
    const {data} = await axiousInstance.get<IPost[]>('/posts', {});
return data
}
export const goToDetails=async(postId:number):Promise<IPost> =>{
    const{data}=await axiousInstance.get<IPost>('/posts/'+postId);
    console.log('API RESPONSE:', data);
    return data
}

export const getCommentsById=async(id:number):Promise<IComent[]>=>{
    const {data} =await axiousInstance.get<IComent[]>(`/posts/${id}/comments`,{});
    console.log('API RESPONSE:', data);
    return data
}
