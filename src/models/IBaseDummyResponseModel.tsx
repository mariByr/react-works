import type {IUsersDummyjson} from "./IUsersDummyjson.tsx";

export  interface IBaseDummyResponseModel{
    users:IUsersDummyjson[];
    total: number;
   skip: number;
   limit: number;
}
