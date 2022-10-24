import React, { useState } from 'react'

export default function Counter() {

    const [count, setCount] = useState(0);

    const onClick = () => {

        setCount(count + 1);
    }
    const onAdd2 = () => {
        //setCount(count + 1);
        //setCount(count + 1);
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
    }
    return (
        <div>
            { count }
            <button onClick={onClick}>+</button>
            <button onClick={onAdd2}>+2</button>
        </div>
    )
}
