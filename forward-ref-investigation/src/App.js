import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import CustomInput from './CustomInput';

function App() {
  const txtName = useRef();

  const [name, setName] = useState("");

  const onClick = () => {
    txtName.current.focus();
  }
  return (
    <>
      <CustomInput 
        value={name} 
        onChange={(e)=>setName(e.target.value)} 
        style = {{border: "3px solid black"}}
        ref={ txtName }/><br/>
      <button onClick={onClick}>Set Focus</button>

      <hr/>
      { name }
    </>
  );
}

export default App;
