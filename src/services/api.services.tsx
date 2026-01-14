 const baseUrlDummy='https://dummyjson.com'

 export const getAllFromDummy: <T>(endpoint: string) => Promise<T> =
     async <T,>(endpoint: string):Promise<T> => {
         return await fetch(`${baseUrlDummy}${endpoint}`).then(res => res.json());
     };


const baseUrlJson= 'https://jsonplaceholder.typicode.com'

 export const getAllFromJson: <T>(endpoint: string) => Promise<T> =
     async <T,>(endpoint: string):Promise<T> => {
    return await fetch(`${baseUrlJson}${endpoint}`).then(res => res.json());
     }
// getAll<IBaseResponseModel & { posts: IPosts[]}>('/posts').then(value =>setPosts( value.posts))
