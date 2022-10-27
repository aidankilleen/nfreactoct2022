import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useCustomLogger } from './useCustomLogger';
import useLocalStorage from './useLocalStorage';

function App() {

  const [name, setName] = useState("");

  const [country, setCountry]= useLocalStorage("country", "Ireland");

  useCustomLogger(name);

  return (
    <>
      <h1>Custom Hook Investigation</h1>
      <input value={name} onChange={(e)=>setName(e.target.value)}/><hr/>
      { name }
      <hr/>
      <input value={country} onChange={(e)=>setCountry(e.target.value)}/><hr/>
      { country}
    </>
  );
}

export default App;
