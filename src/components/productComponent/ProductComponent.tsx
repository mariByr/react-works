import type {IProduct} from "../../models/IProduct.ts";
import type {FC} from "react";

interface ProductComponentProps {
    product: IProduct
}

export const ProductComponent:FC<ProductComponentProps> = ({product:{title,description}} ) => {
    return (
        <div className={'border border-2 p-2.5'}>
           <p>{title}</p>
            <p>{description}</p>
        </div>
    );
};
