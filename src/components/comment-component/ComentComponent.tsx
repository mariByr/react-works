import type {IComent} from "../../models/IComent.tsx";

interface ComentComponentProps {
    comment: IComent
}

export const ComentComponent = ({comment}: ComentComponentProps) => {
    return (
        <>
            <p>{comment.id}---{comment.body}</p>

        </>
    );
};
