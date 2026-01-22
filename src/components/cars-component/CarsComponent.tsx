import {useEffect, useState} from "react";
import type {ICar} from "../../models/ICar.ts";
import {getCars} from "../../servises/api.service.tsx";
import {CarComponent} from "../car-component/CarComponent.tsx";



export const CarsComponent = () => {
    const [cars, setCars] = useState<ICar[]>([]);

        useEffect(() => {getCars().then(cars => setCars(cars));

            },
    [])
    return (
        <div>
            {
            cars.map((car, index) => <CarComponent key={index} car={car} />)
            }
</div>
    );
};
