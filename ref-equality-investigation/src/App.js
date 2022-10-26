import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [count, setCount] = useState(0);

  const styles = useMemo(()=> {
    return {
      color: darkMode ? 'white' : 'black', 
      backgroundColor: darkMode ? 'black' : 'white'
    }
  }, [darkMode]);

  useEffect(()=> {
    alert("Theme was changed");
  }, [styles]);

  return (
    <div style={styles}>
      <h1>Referential Equality </h1>
      <input 
        type="number" 
        value={count} 
        onChange={(e)=>setCount(e.target.value)}
      />
      <input type="checkbox"
        checked={darkMode}
        onChange={(e)=> setDarkMode(e.target.checked)}/>
    </div>
  );
}

export default App;
