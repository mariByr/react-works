import {useEffect, useState} from "react";
import type {ITodoModel} from "../../models/TodoModel.ts";
import {loadTodos} from "../../service/api.service.ts";
import {TodoComponent} from "../todo-component/Todo.tsx";


export const TodosComponent = () => {
    const[ todos,setTodos]=useState<ITodoModel[]>([])
    useEffect( ()=>{
        loadTodos().then(res=>setTodos(res))
    },[]);

    return (
        <div>
            {
                todos.map(todo=> <TodoComponent key={todo.id} todo={todo}/>)
            }
        </div>
    );
};

export default TodosComponent;
