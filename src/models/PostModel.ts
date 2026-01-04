interface PostReactions {
    likes: number;
    dislikes: number;
}

export interface IPostModel {
    id:number;
    title:string;
    body: string;
    tags: string[];
    reactions: PostReactions;
    views:number;
    userId:number;
}
