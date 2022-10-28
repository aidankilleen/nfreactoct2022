import { forwardRef } from "react";

const CustomInput = ({style, ...props}, ref) => {
    const styles = {
        backgroundColor: "lightgreen"
        
    }
    return (
        <div style={styles}>
            <input 
                ref={ref}
                style={style} 
                {...props}/>
        </div>
    )
}

export default forwardRef(CustomInput);