import React from 'react'
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getAllUsers } from './Api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProgressSpinner } from 'primereact/progressspinner';


export default function UserListPage() {

    const { data:users, error, isLoading, isError } = 
        useQuery("users", getAllUsers);

    if (isLoading) {
        return (
            <div style={{display:"flex"}}>
                <ProgressSpinner 
                    style={{
                        width: '50px', 
                        height: '50px',
                        margin: "auto"}} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s"/>
            </div>
        )
    }

    if (isError) {
        return <div>Error:{ error.message }</div>
    }

    
  return (
    <div>
        <DataTable loading={isLoading} value={ users }>
        <Column 
              body={user =><Link to={`${ user.id }`}>{user.id}</Link>} 
              header="Id">
              
            </Column>
            <Column field="name" header="Name"></Column>
            <Column field="email" header="Email"></Column>
            <Column body={(user)=>{
              return user.active ? "Active": "Inactive"
            }} header="Active"></Column>
        </DataTable>
        
    </div>
  )
}
