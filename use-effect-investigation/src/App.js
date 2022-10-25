import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import RandomUser from './RandomUser';

  function App() {

    const [dimensions, setDimensions] = useState({width:50, height:50});

    //const [width, setWidth] = useState(50);
    //const [height, setHeight] = useState(50);
    const [darkMode, setDarkMode] = useState(false);
    const [area, setArea] = useState(0);

    const calcArea = (w, h) => {
      // slow this down 
      const n = [...Array(10000000).keys()].reduce((p, c)=>p+c);
      return w * h;
    }

    useEffect(()=>{
      setArea(calcArea(dimensions.width, dimensions.height));
    }, 
    [dimensions]);

    return (
        <div style={{
          backgroundColor: darkMode ? 'black': 'white', 
          color: darkMode ? 'white' : 'black'
        }}>
          <input type="checkbox" 
            checked={darkMode}
            onChange = {()=>setDarkMode(prev=>!prev)}/>Dark Mode

            <h1>useEffect Hook Investigation</h1>

            <RandomUser/>

            Width:<input 
                    type="number" 
                    value={ dimensions.width }
                    onChange={(e)=>setDimensions((prev) => {
                        return {
                          ...prev, 
                          width: e.target.value
                        }
                      })
                    }/> <br/>
            Height:<input 
                    type="number" 
                    value={ dimensions.height }
                    onChange={(e)=>setDimensions((prev)=> {
                      return {
                        ...prev, 
                        height: e.target.value
                      }
                    })}/> <br/>
            <hr/>
            { area }

        </div>
    );
  }

export default App;
