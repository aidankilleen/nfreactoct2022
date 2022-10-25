import { useMemo } from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const doubleNumber = (n) => {

    [...Array(10000000).keys()].reduce((p, c)=>p+c);
    return n * 2;
  }

  const doubledNumber = useMemo(() => {
    console.log("useMemo calculating doubleNumber()");
    return doubleNumber(count);
  }, [count]);

  return (
    <div style={{
      color: darkMode?'white':'black', 
      backgroundColor: darkMode? 'black': 'white'
    }}>
      <input 
        type="checkbox" 
        checked={darkMode}
        onChange={(e)=>setDarkMode(e.target.checked)}/>

      <h1>useMemo Investigation</h1>
      <input 
        type="number" 
        value={count} onChange={(e) => setCount(e.target.value)}
      />
      <hr/>

      { count }<br/>

      { doubledNumber }


    </div>
  );
}

export default App;
