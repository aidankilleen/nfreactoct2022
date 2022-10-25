import React, { useContext } from 'react'
import { DarkModeContext } from './App'

export default function Information() {

    const darkMode = useContext(DarkModeContext);
    return (
        <div style={{
            color: darkMode.value? 'white':'black', 
            backgroundColor: darkMode.value ? 'black': 'white'
        }}
        >
            <h1>Information</h1>
            <p>blah blah blah</p>

            <input 
                type="checkbox" 
                checked={darkMode.value}
                onChange={(e) => darkMode.setter(e.target.checked)}/>
        </div>
    )
}
