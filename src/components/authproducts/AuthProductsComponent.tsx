import {useEffect, useState} from "react";
import type {IProduct} from "../../models/IProduct.ts";
import {loadAuthProducts, refresh} from "../../services/api.service.tsx";
import {ProductComponent} from "../productComponent/ProductComponent.tsx";

export const AuthProductsComponent = () => {
    const [authProducts, setAuthproducts] = useState<IProduct[]>([]);
    useEffect(() => {
        //виклик функції для загрузки
        loadAuthProducts().then(products=>setAuthproducts(products))
            //якщо буде помилка виводим її в консоль і відразу запускається функція рефрешу токену і після неї знову загрузка із новим токеном
            .catch(reason => console.log(reason));

        refresh()
            .then(() => loadAuthProducts())
            .then(products =>setAuthproducts (products));


    }, []);
    return (
        <div className={'grid grid-cols-3 border border-gray-500'}>
            {
            authProducts.map(product => <ProductComponent product={product} key={product.id} />)
            }
        </div>
    );
};
