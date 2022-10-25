import React from 'react'

export function Button({ text, colour, size, ...props }) {

    let styles = {
        backgroundColor: colour, 
        padding: size === 'large' ? '20px' : '4px', 
        fontSize: size == 'large' ? '20px' : '12px',
        color: props.disabled ? 'white' : 'blue'
    }
    return (
        <button style={styles} {...props}>
            { text }
        </button>
    )
}

export const LargeButton = ({...props}) => {
    //props.size="large";

    return (
        <Button {...props} size="large"/>
    )
}
export const DangerButton = ({...props}) => {

    props.colour = "red";
    return (
        <Button {...props} />
    )
}
