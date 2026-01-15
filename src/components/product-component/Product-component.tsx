import type {FC} from "react";
import type {IProduct} from "../../models/Product.ts";

interface ProductComponentProps {
    product: IProduct
}

 export const ProductComponent:FC<ProductComponentProps> = ({ product: { id, title, description,category,price,discountPercentage,rating,stock,tags,brand,sku,weight,dimensions,warrantyInformation,shippingInformation,availabilityStatus,reviews,returnPolicy,minimumOrderQuantity,meta,thumbnail } }) => {
    return (
        <div className={ "border border-gray-300"}>
            <img src={thumbnail} alt={title}/>
        <h2>{id}</h2>
            <h2>Title: {title}</h2>
            <p>Description: {description}</p>
            <p>Categore:{category}</p>
            <p>Price:{price}</p>
            <p>DiscountPercentage: {discountPercentage}</p>
            <p>Rating: {rating}</p>
            <p>Stock:{stock}</p>
            <p>Sku: {sku}</p>
            <p>Weight: {weight}</p>
            <div>
                <h2>Dimensions: width: {dimensions.width},
                height: {dimensions.height},
               depth: {dimensions.depth}</h2>
            </div>
            <p>WarrantyInformation: {warrantyInformation}</p>
            <p>ShippingInformation:{shippingInformation}</p>
            <p>AvailabilityStatus: {availabilityStatus}</p>
            <div>
                <h3>Meta</h3>
                <p>{meta.createdAt}</p>
                <p>{meta.updatedAt}</p>
                <p>{meta.barcode}</p>
                <p>{meta.qrCode}</p>
            </div>
            <p>ReturnPolicy: {returnPolicy}</p>
            <p>MinimumOrderQuantity: {minimumOrderQuantity}</p>
            <ul>
                {
                    tags.map(tag=>(<li key={tag}>{tag} </li>))
                }
            </ul>
            <p>{brand}</p>
            <ul className={'text-lg mt-2'}>REVIEWS
                {
                    reviews.map((review,index)=>(<li className={"p-3 bg-white "} key={index} ><p>Review.rating: M{review.rating}</p>
                    <p>{review.comment}</p>
                        <p>{review.date}</p>
                    <p>{review.reviewerName}</p>
                        <p>{review.reviewerEmail}</p>
                    </li>))
                }
            </ul>





        </div>
    );
};
