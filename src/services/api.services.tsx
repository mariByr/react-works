import type IUserResponseModel from "../models/IUserResponseModel.ts";
import type {ICartResponseModel} from "../models/ICartResponseModel.ts";

const baseUrl='https://dummyjson.com';
export const userService = {
    getALLUsers:async (): Promise<IUserResponseModel> => {
        return await fetch(baseUrl+'/users')
            .then(value => value.json())
    },
}
export const cartService = {
    getCartsOfUser:async (userId:number): Promise<ICartResponseModel> => {
        return await fetch(baseUrl+'/carts/user/'+ userId)
            .then(value => value.json())
    }
}
