import {useEffect} from "react";
import {login} from "../services/api.service.tsx";

export const LoginComponent = () => {
    useEffect(() => {
        login(//запускаємо функцію для отримання аутентифікації
            {username:'emilys',
            password:'emilyspass',
            expiresInMins:1
        })

    }, []);
    return (
        <>

        </>
    );
};
