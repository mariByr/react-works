import {useQuery} from "@tanstack/react-query";
import {getCommentsById} from "../servises/api.services.tsx";
import type {IComment} from "../models/IComment.ts";



export const useComments=(postId:number)=>{return useQuery<IComment[]>({
    queryKey:['comments',postId],
    queryFn: () =>getCommentsById(postId),
    enabled: !!postId,
})}
//queryFn: () => getCommentsById(postId),
