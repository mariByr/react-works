import  axios from "axios";
import type IUserWithTokens from "../models/IUserWithTokens.ts";
import type {IProduct} from "../models/IProduct.ts";
import type {IProductsResponseModelType} from "../models/IProductResponseModel.ts";
import {retriveLocalStorage} from "./helpers.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";

interface LoginData {username:string;
    password:string;
    expiresInMins:number
}
//-------------------------------------------axiosInstance
//створюємо потрібний нам аксіос, він містить вже baseurl

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers:{}
});

//-----------------------------------------interceptors.request.use
//додавання токену в хедер через іnterceptors при запиті на отримання авторизованої інфи, так як ми того не зробили ні в аксіосі ні в конкретній функції

axiosInstance.interceptors.request.use((requestObject)=>{
    if(requestObject.method?.toUpperCase()==='GET'){
        requestObject.headers.Authorization=  'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken

    }
    return requestObject;
})
//----------------------------------------login

// створюємо функцію для отримання з апі токіну і рефрештокіну

export const login=async ({username, password,expiresInMins}:LoginData):Promise<IUserWithTokens> => {const {data:userWithTokens}= await axiosInstance.post<IUserWithTokens>('/login',{
    username, password,expiresInMins})
console.log(userWithTokens);

    //зберігаємо токіни в локал сторіджі
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens;
}
//--------------------------------loadAuthProducts
//функція для отримання auth даних, не забути, що робимо get то тип структура загал відповіді ,очікуємо отримати проміс продукта поякому робимо запит, користуємося аксіосом створюємо response і деструктуризуємо його

export const loadAuthProducts = async ():Promise<IProduct[]> => {
   const {data:{products}} =await axiosInstance.get<IProductsResponseModelType>('/products', {});
       return products
}

//------------------------- refresh
//функція для отримання refresh tokena, витягуємо старий рефреш і його постимо для отримання нової пари тоді міняємо старі на нові і сетимо назад в локал
const iUserWithToken= retriveLocalStorage<IUserWithTokens>('user');
export const refresh = async () => {
    const{data:{accessToken,refreshToken}}= await axiosInstance.post<ITokenPair>('/refresh',{
        refreshToken:iUserWithToken.refreshToken,
        expiresInMin:1
    })
    console.log(accessToken)
    console.log(refreshToken)
    iUserWithToken.accessToken=accessToken;
    iUserWithToken.refreshToken=refreshToken;
    localStorage.setItem('user', JSON.stringify(iUserWithToken));

}
