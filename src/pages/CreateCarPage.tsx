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
                <div className={'form-group'}>
                    <label htmlFor="brand"> brand</label>
                <input id={'brand'} type="text" placeholder={'enter brand'} {...register('brand')}/>
                    <div className='errors-method'>{errors.brand?.message}</div>
                </div>
                <div className={'form-group'}>
                    <label htmlFor="{'price'}">Price</label>
                    <input id={'price'} type="number" placeholder={'Enter price'} {...register('price')}/>
                    <div className='errors-method'>{errors.price?.message}</div>
                </div>
                <div className={'form-group'}>
                    <label htmlFor="{'year'}">Year</label>
                    <input id={'year'} type="number" placeholder={'Enter year'} {...register('year')}/>
                    <div  className="errors-method">{errors.year?.message}</div>
                </div>
            <button type="submit">Save</button>
            </form>
        </>
    );
};
