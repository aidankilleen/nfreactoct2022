import React from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getUser } from './Api';
import { ProgressSpinner } from 'primereact/progressspinner';


export default function UserDetailPage() {

    const { id } = useParams();

    const {data:user, error, isLoading, isError } 
        = useQuery(["user", { id }], getUser);

    if (isLoading) {
        return (
            <div>
                <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s"/>
            </div>
        )
    }
    if (isError) {
        return <div>Error: {error.message }</div>
    }

  return (
    <div>
        <h2>User Detail</h2>

        <table>
            <tbody>
                <tr>
                    <td>Id</td><td>{user.id}</td>
                </tr>
                <tr>
                    <td>Name</td><td>{user.name}</td>
                    </tr>
                <tr>
                    <td>Email</td><td>{user.email}</td>
                    </tr>
                <tr>
                    <td>Active</td><td>{user.active ? "Active" : "Inactive"}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
