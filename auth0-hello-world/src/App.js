import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function App() {

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const onClickLogin = () => {
    loginWithRedirect({
      redirectUri: `${window.location.origin}/members`
    })
  }
  const onClickLogout = () => {

    logout({
      returnTo: `${window.location.origin}/home`
    })
  }
  return (
    <>
      <h1>OAuth - Auth0 Sample</h1>
        <h2>{ isAuthenticated ? "Logged In" : "Logged Out"}</h2>
      <nav>
        <Link to="/home">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link> | 
        { isAuthenticated && (
          <>
            <Link to="/members">Members</Link> |
            <Link to="/profile">Profile</Link> 
          </>
        )}
        { !isAuthenticated && <button onClick={onClickLogin}>Login</button> }
        { isAuthenticated && <button onClick={onClickLogout}>Logout</button> }
      </nav>
      <hr/>
      <Outlet/>
    </>
  );
}

export default App;
