import { useState } from 'react';
import './App.css';
import Message from './Message';
import CBox from './CBox';
import Counter from './Counter';


function App() {
  const [name, setName] = useState("aidan");
  const [borderWidth, setBorderWidth] = useState(5);
  console.log("App() called");
  const onClick = () => {
    alert("you clicked");
  }
  const onChange = (e) => {
    console.log("onChange called");
    setName(e.target.value);
  }
  // <> jsx "fragment"

  const messages = [
    { id: 1, title: "M1", message: "This is M1", colour: "lightcoral", author:"Aidan" }, 
    { id: 2, title: "M2", message: "This is M2", colour: "lightblue", author:"Bob" }, 
    { id: 3, title: "M3", message: "This is M3", colour: "lightgreen", author:"Carol" } 
  ];
  return (
    <>
    {
      messages.map(message => <Message 
                                key={ message.id } 
                                { ...message}/>)
      /*
      messages.map(message => <Message 
            key = { message.id }
            title={ message.title }
            message = { message.message }
            colour = { message.colour }
          ></Message>
        
      )
      */
    }
    </>
  );
}

export default App;
