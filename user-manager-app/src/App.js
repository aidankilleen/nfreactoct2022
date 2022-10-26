import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <h1>User Manager App</h1>
      <nav>
        <Link to="/home">Home Page</Link> |
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact Us</Link>
      </nav>
      <hr/>
      <Outlet/>

    </>
  );
}

export default App;
