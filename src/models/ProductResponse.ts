import type {IProduct} from "./Product.ts";

export interface ProductResponse {
    products: IProduct[];
    total:    number;
    skip:     number;
    limit:    number;
}
