import type {FC} from "react";
import type {IProduct} from "../../models/Product.ts";

interface ProductComponentProps {
    product: IProduct
}
//const ProductComponent = ({ product }: ProductProps) => {
 export const ProductComponent:FC<ProductComponentProps> = ({ product}) => {
    return (
        <div className="flex  justify-center items-center  gap-6 border-2 p-4">

        <h3>{product.id}</h3>
            <p>{product.title}</p>
            <img
                src={product.thumbnail}
                alt={product.title}
                width={200}
            />
        </div>
    );
};
