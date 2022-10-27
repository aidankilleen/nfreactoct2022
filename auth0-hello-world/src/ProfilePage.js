import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'

export default function ProfilePage() {

    const { isAuthenticated, user } = useAuth0();

    if (isAuthenticated) {
        return (
            <div>
                <h2>{ user.given_name } { user.family_name }</h2>
                <img src={user.picture }/><hr/>
                <a href={`mailto:${user.email}`}>
                    {user.email}
                </a>
            </div>
        )

    } else {
        return (
            <div>
                <h2>Access Denied</h2>
            </div>
        )
    }
}
