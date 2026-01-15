import {useEffect, useState} from "react";
import {loadProducts} from "../../services/api.service.ts";
import type {IProduct} from "../../models/Product.ts";
import {ProductComponent} from "../product-component/Product-component.tsx";


 export const ListProductComponent = () => {
    const[products, setProduct] = useState<IProduct[]>([]);
    useEffect(()=>{
        async function fetchProduct(){
            const allProducts:IProduct[] = await loadProducts();
            setProduct(allProducts);
        }
        fetchProduct();
    },[])
     console.log("products state:", products);

     return (
        <div className="grid grid-cols-3 gap-6 border-b border-gray-200">

            {
                products.map((product) => <ProductComponent product={product} key={product.id}/>)
            }
        </div>
    );
};
