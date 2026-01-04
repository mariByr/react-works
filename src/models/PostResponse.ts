import type {IPostModel} from "./PostModel.ts";

export interface PostResponse{posts:IPostModel[],skip:number,limit:number}
