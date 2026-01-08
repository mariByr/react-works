import type {ProductResponse} from "../models/ProductResponse.ts";
import type {IProduct} from "../models/Product.ts";

const endpointProduct= import.meta.env.VITE_API_BASE_URL + '/products/';
const loadProducts= async ():Promise<IProduct[]>=>
{
    const response:ProductResponse = await fetch(endpointProduct)
        .then( value => value.json())

    console.log("API response:", response);
    return response.products;


}
export{loadProducts}
