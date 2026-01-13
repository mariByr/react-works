import type {ICart} from "../../models/ICart.ts";
import type {FC} from "react";

interface CartComponentProps {
    cart: ICart
}

export const CartComponent:FC< CartComponentProps> = ({cart}) => {
    return (
      <>

            <h3>{cart.userId}</h3>
            <p> {cart.total}</p>

        </>

    )
};
