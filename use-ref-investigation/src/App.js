import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import { useEffect } from 'react';

function App() {

  console.log("App() rerendered")
  const [name,setName] = useState("Aidan");
  //const [count, setCount] = useState(0);
  const count = useRef(0);

  const countryRef = useRef();
  
  useEffect(()=> {
    console.log("useEffect Called.");
    
    // nb: this doesn't rerender so count = 0 on screen
    // it jumps to 2 on the first state change 
    // that causes a re-render.
    count.current = count.current + 1;

  });

  const onSubmit = (e) => {
    e.preventDefault();
    alert("submitted");

    console.log(`Name: ${name}`);
    console.log(`Country: ${countryRef.current.value}`);

  }
  return ( 
    <>
      <h1>useRef Investigation</h1>

      <span>my name is { name }</span>
      <hr/>
      { JSON.stringify(count) }
      <hr/>

      <form onSubmit={onSubmit}>
        Name:<input value={ name } onChange={e => setName(e.target.value)}/>
        Country:<input ref={countryRef}/><br/>

        <input type="submit" value="submit"/>
      </form>
    </>
  );
}

export default App;
