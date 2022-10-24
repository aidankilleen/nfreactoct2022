import React, { useState } from 'react'

export default function AccordionItem({ item, onExpanded }) {

    //const [expanded, setExpanded] = useState(item.expanded);

    const onClick = () => {
        //alert("clicked");
        //setExpanded(previous => !previous);
        onExpanded(item);
    }

    return (
        <div>
            <h2 onClick={onClick}
                style = {{
                    backgroundColor: item.expanded ? 'lightblue' : 'lightgreen'
                }}
            >{ item.title }</h2>
            { item.expanded && <p>{ item.text }</p> }
        </div>
    )
}
