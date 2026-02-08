

const baseUrl='https://jsonplaceholder.typicode.com'

export const getAll= async<T,>(endpoint:string)=>{const responseRezult= await fetch(`${baseUrl}${endpoint}`)
    .then(responseRezult=>responseRezult.json());
    return responseRezult as T;

}
