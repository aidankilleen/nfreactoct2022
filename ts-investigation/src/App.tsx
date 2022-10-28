import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';
import UserComponent from './UserComponent';


function App() {

  const users: User[] = [
    new User(1, "Alice", "alice@gmail.com", true), 
    new User(2, "Bob", "bob@gmail.com", true), 
    new User(3, "Carol", "carol@gmail.com", true), 
    new User(4, "Dan", "dan@gmail.com", false)
  ];

  const u = {
    id: 5, 
    name: "Eve", 
    email: "eve@gmail.com", 
    active: true
  }


  return (
    <>
      <h1>TS Investigation</h1>
      <UserComponent user={users[0]}></UserComponent>

      <UserComponent user={u}></UserComponent>
    </>
  );
}

export default App;
