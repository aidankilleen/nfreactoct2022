import React from 'react'

export default function UserListPage() {

    const users = [
        {id:1, name:"Alice", email:"alice@gmail.com", active: true }, 
        {id:2, name:"Bob", email:"bob@gmail.com", active: true }, 
        {id:3, name:"Carol", email:"carol@gmail.com", active: false }, 
        {id:4, name:"Dan", email:"dan@gmail.com", active: true }, 
        {id:5, name:"Eve", email:"eve@gmail.com", active: false } 
    ];
  return (
    <div>
        <h2>UserListPage</h2>

        { JSON.stringify(users)}
    </div>
  )
}
