import {useContext} from "react";
import {MyContext} from "../../context/MyContextProvider.tsx";
import './AA.css'

export const AA = () => {

    const {theme} = useContext(MyContext);//натиск кнопки на одному міняє тему на іншому, бо стан в контексті яких їх огорнув
    return (
        <div className={theme}>
THIS EXAMPLE
        </div>
    );
};
