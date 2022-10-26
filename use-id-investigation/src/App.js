import './App.css';
import { useId } from 'react';

const EmailForm = () => {

  //const id = Math.random();

  const id = useId();
  //const id_name = useId();

  return (
    <>
      <label htmlFor={`${id}_email`}>Email</label>
      <input id={`${id}_email`} type="email"/>
      <label htmlFor={`${id}_name`}>Name</label>
      <input id={`${id}_name`} type="email"/>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <h1>use ID Investigation</h1>
      <EmailForm/>

      <section>
        <p>blah blah blah</p>
        <p>blah blah blah</p>
        <p>blah blah blah</p>
        <p>blah blah blah</p>
        <p>blah blah blah</p>
        <p>blah blah blah</p>
      </section>

      <EmailForm/>






    </div>
  );
}

export default App;
