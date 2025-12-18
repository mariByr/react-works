import type {ITodoModel} from "../../models/TodoModel.ts";
import type {FC} from "react";

interface TodoComponentProps {
    todo: ITodoModel
}

export const TodoComponent:FC<TodoComponentProps > = ({todo:{ title,id,userId,completed}}: TodoComponentProps) => {
    return (
        <div>
            {id} {title} {userId} {completed.toString()}

        </div>
    );
};
