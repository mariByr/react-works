
import  axios from "axios";
import type {IPost} from "../models/IPost.ts";
import type {IComment} from "../models/IComment.ts";

 //--------створюємо екземпляр аксіоса

const axiosInstance=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{'Content-Type': 'application/json',}
})

export const getPosts=async ():Promise<IPost[]>=> {
    const {data} = await axiosInstance.get<IPost[]>('/posts',{})
    return data
}

export const getDetailsPost=async( postId:number):Promise<IPost> => {
    const {data} = await axiosInstance.get<IPost>(`/posts/${postId}`,{})
    return data
}

export const getCommentsById=async(id:number):Promise<IComment[]> => {
    const {data} = await axiosInstance.get<IComment[]>(`posts/${id}/comments`,{})
    return data
}
