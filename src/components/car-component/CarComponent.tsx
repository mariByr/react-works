import type {ICar} from "../../models/ICar.ts";
import type {FC} from "react";
import './car.css'
interface CarComponentProps {
    car: ICar
}

export const CarComponent:FC<CarComponentProps> = ({car:{id,brand,price,year}} ) => {
    return (
        <div className={'car'}>
           <p>Id:{id}</p>
           <p>Brand: {brand}</p>
            <p>price: {price}</p>
            <p>year: {year}</p>
        </div>
    );
};
