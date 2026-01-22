import {useForm} from "react-hook-form";
import type {ICar} from "../models/ICar.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../validators/validator.ts";
import {addCar} from "../servises/api.service.tsx";


export const CreateCarPage = () => {console.log('car')
    const{register,handleSubmit,formState:{errors}} = useForm<ICar>({mode:'all',resolver:joiResolver(carValidator)})
    const createHendler=(data:ICar)=>{addCar(data)}
    return (
        <>
            <form className={'form-car'} onSubmit={handleSubmit(createHendler)}>
                <div>
                    <label htmlFor="brand">enter brand</label>
                <input id={'brand'} type="text" {...register('brand')}/>
                    <div>{errors.brand?.message}</div>
                </div>
                <div>
                    <input type="number"{...register('price')}/>
                    <div>{errors.price?.message}</div>
                </div>
                <div>
                    <input type="number"{...register('year')}/>
                    <div>{errors.year?.message}</div>
                </div>
                <button type="submit">Save</button>

            </form>
        </>
    );
};
