import React, { FC } from 'react'
import User from './User';

interface UserProps {
  user:User
}

const UserComponent:FC<UserProps> = (props) => {
  const {user} = props;
  return (
    <div>
      {user.id}
        <h2>{user.name}</h2>
        {user.email}<br/>
        {user.active ? "Active" : "Inactive" }
    </div>
  )
}
export default UserComponent;
