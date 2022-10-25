import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import { useEffect } from 'react';

function App() {

  console.log("App() rerendered")
  const [name,setName] = useState("Aidan");
  //const [count, setCount] = useState(0);
  const count = useRef(0);

  useEffect(()=> {
    console.log("useEffect Called.");
    
    // nb: this doesn't rerender so count = 0 on screen
    // it jumps to 2 on the first state change 
    // that causes a re-render.
    count.current = count.current + 1;

  });


  return ( 
    <>
      <h1>useRef Investigation</h1>

      <input value={ name } onChange={e => setName(e.target.value)}/>
      <span>my name is { name }</span>
      <hr/>
      { JSON.stringify(count) }
    </>
  );
}

export default App;
