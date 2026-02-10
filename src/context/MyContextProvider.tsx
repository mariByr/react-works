import {createContext} from "react";

;

type ContextValueType = {
    theme:string,
    changeTheme: (theme: string) => void
}
//створюємо початкове значення
const defaultContextValue :ContextValueType = {
    theme: 'light',
    changeTheme: (theme: string) => {
        console.log(theme)
    },
}
 export const MyContext=createContext<ContextValueType>(defaultContextValue);
