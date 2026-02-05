import {useQuery} from "@tanstack/react-query";
import { getDetailsPost, getPosts} from "../servises/api.services.tsx";
import type {IPost} from "../models/IPost.ts";



// робимо обгортки для query функцій,щоб не писати багато в компонентах

export const usePosts=()=>useQuery({
    queryKey:['posts'],
    queryFn:getPosts,
})

export const useDetails = (postId: number) => {
    return useQuery<IPost>({
        queryKey: ['post', postId],
        queryFn: () => getDetailsPost(postId),
        enabled: !!postId,
    });
};
