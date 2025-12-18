import type {ITodoModel} from "../models/TodoModel.ts";

const endpointTodos = import.meta.env.VITE_API_BASE_URL +'/todos';

const loadTodos=async ()=>{
 const response:ITodoModel[]=   await fetch(endpointTodos)
        .then(res=>res.json())
    return response;
}
export {loadTodos}
