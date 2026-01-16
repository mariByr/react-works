import type {IPostJson} from "../../../models/models-json/IPostJson.ts";
import type {FC} from "react";

interface PostComponentProps {
    post: IPostJson
}

export const PostComponent:FC< PostComponentProps> = ({post}) => {
    return (
        <div className={'p-4 m-4'}>
      <h2>{post.title}</h2>
        </div>
    );
};
