import React, { useState } from 'react'
import AccordionItem from './AccordionItem'

export default function Accordion({ items:itemsProp }) {

    const [items, setItems] = useState(itemsProp);

    const onExpanded = (expandedItem) => {

    setItems(previousItems => previousItems.map(item => {
        item.expanded = item.id === expandedItem.id;
        return item;
    }));

    }
  return (
    <>
    <div className="accordion">
        {
            items.map(item => {
                return (
                    <AccordionItem 
                        onExpanded = { onExpanded }
                        key={ item.id } 
                        item = { item }/>
                )
            })
        }
    </div>
    </>
  )
}
