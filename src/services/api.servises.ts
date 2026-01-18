import type {IUsersResponse }from "../models/IUsersResponse.ts";

const baseUrl = 'https://dummyjson.com';

 export const getUsers=async(page:string):Promise<IUsersResponse> => {
const limit=30;
const skip=limit*(+page)-limit;
const response:Promise<IUsersResponse> = await fetch(baseUrl+'/users'+'?skip='+skip)
    .then(res => res.json())
     return response;
}
