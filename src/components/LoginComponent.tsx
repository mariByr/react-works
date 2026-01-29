import {useEffect} from "react";
import {login} from "../services/api.service.tsx";
// щоб отримати певні дані треба аунтифікуватись щоб отримати доступ в вигляді токенів для цього створюємо компонент логін
export const LoginComponent = () => {
    useEffect(() => {
        //у useEffectiцього компоненту запускаємо функцію яка робить за првилами апі запит на отримання токенів,передаємо цій функції потрібні аргументи
        login(
            {username:'emilys',
            password:'emilyspass',
            expiresInMins:5
        })

    }, []);
    return (
        <>

        </>
    );
};
