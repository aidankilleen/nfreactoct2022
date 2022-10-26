import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function HomePage() {

  const navigate = useNavigate();

  const onClick = () => {
    navigate("/users/3");
  }
  const items = [
    {
      id:1, 
      title: "Image 1", 
      img: "https://picsum.photos/id/111/800/300"
    },
    {
      id:2, 
      title: "Image 2", 
      img: "https://picsum.photos/id/112/800/300"
    },
    {
      id:3, 
      title: "Image 3", 
      img: "https://picsum.photos/id/113/800/300"
    },
    {
      id:4, 
      title: "Image 4", 
      img: "https://picsum.photos/id/114/800/300"
    },
  ];

  const itemTemplate = (item) => {
    return (
      <div style={{padding: "auto"}}>
        <h3>{item.title}</h3>
        <img src={item.img}/>
      </div>
    )
  }

  return (
    <div>
      <h2>HomePage</h2>

      <Carousel 
        value={items} 
        numVisible={1} 
        numScroll={1}
        itemTemplate={itemTemplate} 
        circular={true}/>

      <Button onClick={onClick} label="Jump to User 3"/>
      
    </div>
  )
}
