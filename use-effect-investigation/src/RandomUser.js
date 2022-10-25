import React, { useEffect, useState } from 'react'

export default function RandomUser() {

    const [user, setUser] = useState({});
    const [next, setNext] = useState(1);

    // why is useEffect being called twice at startup
    useEffect(()=> {
        console.log("rerendering RandomUser component");
        fetch(`https://randomuser.me/api/`)
            .then(response=>response.json())
            .then(json => {
                const [returnedUser] = json.results;
                setUser(returnedUser)
            })
        }, [next]);
    

  return (
    <div>
        <button onClick={ (e) => setNext(p=>p+1) }>Next</button>
        <h1>{ user.name?.first } { user.name?.last }</h1>
        { JSON.stringify(user)}
    </div>
  )
}
