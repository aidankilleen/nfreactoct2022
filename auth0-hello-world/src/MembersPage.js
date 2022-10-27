import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

export default function MembersPage() {

    const { isAuthenticated } = useAuth0();

    if (isAuthenticated) {
        return (
            <div>
                <h2>Members Only</h2>
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
