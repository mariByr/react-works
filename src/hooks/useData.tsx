import {useEffect, useState} from "react";

export const useData=<T,>(url:string)=>{
    const[obj,setObj]=useState<T>()
    useEffect(() => {
       fetch(url)
                .then(res => res.json())
            .then(res=>setObj(res))


    }, []);
    return obj;
 }
