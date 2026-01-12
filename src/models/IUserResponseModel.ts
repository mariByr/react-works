import type {IUserModel} from "./userModel.ts";

export default interface IUserResponseModel {
   users: IUserModel[];
   total: number;
   skip: number;
   limit: number;
}
