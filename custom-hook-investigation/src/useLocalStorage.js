import { useEffect, useState } from "react";

function getSavedValue(key, initialValue) {

    const v = localStorage.getItem(key);
    const savedValue = JSON.parse(v);
    console.log(savedValue);
    if (savedValue) {
        return savedValue;
    }
    return initialValue;
}

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue);
    })

    useEffect(()=>{
         localStorage.setItem(key, JSON.stringify(value))
    }, [key, value]);

    return [value, setValue];
}