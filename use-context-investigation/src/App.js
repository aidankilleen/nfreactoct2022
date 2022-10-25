import './App.css';
import { createContext, useState } from 'react';
import Information from './Information';
import Documentation from './Documentation';

export const DarkModeContext = createContext();
function App() {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <DarkModeContext.Provider 
      value={ {value:darkMode, setter:setDarkMode }}>
      <div style={{
        color: darkMode? 'white':'black', 
        backgroundColor: darkMode ? 'black': 'white'
      }}>
        <input 
          type="checkbox" 
          checked={darkMode} 
          onChange={(e)=>setDarkMode(e.target.checked)}/>

        <h1>useContext Investigation</h1>
        <div>
          <Information/>

          <Documentation/>
        </div>
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
