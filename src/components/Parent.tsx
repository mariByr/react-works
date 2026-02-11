
import type {IUser} from "../models/IUser.ts";
import {Child} from "./Child.tsx";
import {useCallback, useState} from "react";

export const Parent = () => {

    const friend:{name:string} = {name:'Anna'}//usememo, щоб не викликало перерендеру в дочірньому,посилання не міняється
    console.log(friend);

    const [users,setUsers]= useState<IUser[]>([
        {id:1, name:'John',age:42,},
        { id:2, name:'liza',age:42,},
        {id:5, name:'January',age:42,},
        {id:7, name:'Mary',age:42,},
    ])

    // використовуємо useCallback, щоб не перестворювати функцію при кожному рірендерингу батька при зміні стейту (вона лише викликається і змінює стейт )

    const deleteUser = useCallback((id:number) => {
        setUsers(users =>
            users.filter(user => user.id !== id)
        );
    }, []);
    return (
        <div>
            {

            users.map((user:IUser)=>(<Child key={user.id} user={user}
                                            deleteUser={deleteUser}
            />))

            }
</div>
    );
};
//після видалення одного юзера state батька змінився але memo захистило від перерендирингу Сhild, реакт просто видалив одного  оновивши дом без перерендирингу  всіх юзерів,лише одного стейт тобто масив змінився але пропси тобто юзери крім видаленого ті самі,тому вони не рірендеряться
