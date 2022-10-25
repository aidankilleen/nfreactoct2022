import { useState } from 'react';
import './App.css';

  function App() {

    const [width, setWidth] = useState(50);
    const [height, setHeight] = useState(50);
    const [darkMode, setDarkMode] = useState(false);

    const calcArea = (w, h) => {

      // slow this down 
      const n = [...Array(10000000).keys()].reduce((p, c)=>p+c);
      return w * h;
    }
    const area = calcArea(width, height);

    return (
        <div style={{
          backgroundColor: darkMode ? 'black': 'white', 
          color: darkMode ? 'white' : 'black'
        }}>
          <input type="checkbox" 
            checked={darkMode}
            onChange = {()=>setDarkMode(prev=>!prev)}/>Dark Mode

            <h1>useEffect Hook Investigation</h1>

            Width:<input 
                    type="number" 
                    value={width }
                    onChange={(e)=>setWidth(e.target.value)}/> <br/>
            Height:<input 
                    type="number" 
                    value={ height }
                    onChange={(e)=>setHeight(e.target.value)}/> <br/>
            <hr/>
            { area }

        </div>
    );
  }

export default App;
