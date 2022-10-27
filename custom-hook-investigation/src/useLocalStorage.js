import { useEffect, useState } from "react";

function getSavedValue(key, initialValue) {

    const v = localStorage.getItem(key);

    const savedValue = JSON.parse(localStorage.getItem({key}));

    console.log(savedValue);

    if (savedValue.value) {
        return savedValue.value;
    }
    return initialValue;
}

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        getSavedValue(key, initialValue);
    })

    useEffect(()=>{
         localStorage.setItem(key, JSON.stringify({value}))
    }, [key, value]);

    return [value, setValue];
}