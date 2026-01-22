import type {ICar} from "../../models/ICar.ts";
import type {FC} from "react";

interface CarComponentProps {
    car: ICar
}

export const CarComponent:FC<CarComponentProps> = ({car:{id,brand,price,year}} ) => {
    return (
        <div>
           <p>{id}</p>
           <p>{brand}</p>
            <p>{price}</p>
            <p>{year}</p>
        </div>
    );
};
