import { useState } from 'react';
import { useRef } from 'react';
import './App.css';

function App() {

  const txtName = useRef();
  const txtEmail = useRef();
  const chkActive = useRef();
  
  const [result, setResult] = useState({
    name:"", 
    country:"", 
    email:"", 
    active:false
  });

  const onSubmit = (e) => {
    e.preventDefault();
    let name = txtName.current.value;
    let email = txtEmail.current.value;
    let active = chkActive.current.checked;
    
    setResult(prev => {
      return {
        ...prev, 
        name, 
        email, 
        active
      }
    })

  }
  const onInitialise = () => {
    txtName.current.value = "Aidan";
    txtEmail.current.value = "aidan@gmail.com";
    chkActive.current.checked = true;
  }
  return (
    <>
    <button data-testid="btn-initialise" onClick={ onInitialise }>Initialise Values</button>
      <form onSubmit={ onSubmit }>
        <label htmlFor="txt-name">Name</label>
        <input 
          id="txt-name" 
          data-testid="txt-name"
          ref={txtName} 
          type="text"/><br/>

        <label htmlFor="txt-email">Email</label>
        <input id="txt-email" ref={txtEmail}/><br/>

        <label htmlFor="chk-active">Active</label>
        <input id="chk-active" ref={chkActive} type="checkbox"/><br/>

        <label htmlFor="txt-country">Country</label>
        <input id="txt-country" 
          value={result.country}
          onChange={(e)=>{
            setResult(prev => {
              return {
                ...prev, 
                country: e.target.value
              }
            })
          }}/><br/>

        <input type="submit" value="submit"/>
      </form>
      <hr/>
      { JSON.stringify(result)}
    </>
  );
}

export default App;
