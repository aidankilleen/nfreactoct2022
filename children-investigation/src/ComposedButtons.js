// Higher Order Componet
// returns a Component
// normal components return jsx
const applyExtraProps = (Component, extraProps) => {
    const outerComponent = (props) => {
        
        return <Component {...props} {...extraProps}/>
    }


    return outerComponent;

}
export const BasicButton = ({text, size, colour, ...props}) => {
    let styles = {
        backgroundColor: colour, 
        padding: size === 'large' ? '20px' : '4px', 
        fontSize: size == 'large' ? '20px' : '12px'
    }
    return (
        <button style={ styles } { ...props }>{ text }</button>
    )
}
export const ComposedDangerButton = 
    applyExtraProps(BasicButton, {colour: 'red'});

export const ComposedLargeButton = 
    applyExtraProps(BasicButton, {size: 'large'});

export const ComposedLargeDangerButton = 
    applyExtraProps(ComposedLargeButton, {colour: 'red'});




