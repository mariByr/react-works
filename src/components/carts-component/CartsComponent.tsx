import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {ICart} from "../../models/ICart.ts";

import {cartService} from "../../services/api.services.tsx";
import type {ICartResponseModel} from "../../models/ICartResponseModel.ts";
import {CartComponent} from "../user-component/CartComponent.tsx";


export const CartsComponent = () => {
    const {id}=useParams()
    console.log(id)

    const[carts,setCarts]=useState<ICart[]>([])
    useEffect(() => {

        if(id){
            cartService.getCartsOfUser(+id)
                .then(({carts}:ICartResponseModel)=> {

                    setCarts(carts);
                });

        }
    },[id])

    return (
        <div>
            {carts.map(cart => <CartComponent cart={cart} key={cart.id}/>

            )}
        </div>
    );
};
