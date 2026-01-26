import  axios from "axios";
import type IUserWithTokens from "../models/IUserWithTokens.ts";


const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers:{}
});

interface LoginData {username:string;
    password:string;
    expiresInMins:number
}
// створюємо функцію яка аксіосом відправлятиме на аpi дані,які api вимагає(то будуть її аргументи) для отримання токіну і рефрештокіну
export const login=async ({username, password,expiresInMins}:LoginData) => {const {data:userWithTokens}= await axiosInstance.post<IUserWithTokens>('/login',{
    username, password,expiresInMins})
console.log(userWithTokens);
    localStorage.setItem('user', JSON.stringify(userWithTokens));//зберігаємо токіни в локал сторіджі
    return userWithTokens;
}

//export const loadAuthProducts = async ():Promise<IProductsResponseModel> => {}
