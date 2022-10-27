import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getAllUsers, addUser, updateUser, deleteUser } from './Api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';


export default function UserListPage() {

    const [showUserDialog, setShowUserDialog] = useState(false);
    const [editingUser, setEditingUser] = useState({
        name:"", 
        email:"", 
        active: false
    });
    //const checkActive = useRef();


    const { data:users, error, isLoading, isError } = 
        useQuery("users", getAllUsers);

    const addUserMutation = useMutation((userToAdd) => {
        return addUser(userToAdd);
    });

    const updateUserMutation = useMutation((userToUpdate) => {
        return updateUser(userToUpdate);
    })

    const deleteUserMutation = useMutation((id) => {
        return deleteUser(id);
    })

    const queryClient = useQueryClient();

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

    const onAddUser = () => {
        addUserMutation.mutate(editingUser, {
            onSuccess: (addedUser) => {
                console.log(addedUser);
                queryClient.invalidateQueries(["users"]);
                setShowUserDialog(false);

            }
        })
    }

    const footer = (
        <div>
            <Button 
                label="Save" 
                icon="pi pi-check" 
                onClick={onAddUser} />
            <Button 
                label="Cancel" 
                icon="pi pi-times" 
                onClick={()=>setShowUserDialog(false)} />
        </div>
    );

    const onShowUserDialog = () => {

        setEditingUser({
                name: "", 
                email: "", 
                active: false
            });
        setShowUserDialog(true);
    }
    const onRowEditComplete = (e) => {
        console.log(e);

        const { newData:userToUpdate } = e;

        updateUserMutation.mutate(userToUpdate, {
            onSuccess: (e)=> {
                queryClient.invalidateQueries(["users"]);
            }
        })
    }
    const onDeleteUser = (id) => {
        
        deleteUserMutation.mutate(id, {
            onSuccess: (e)=> {
                queryClient.invalidateQueries(["users"]);
            }
        })
    }
    const onConfirmDeleteUser = (id) => {

        confirmDialog({
            message: `Delete user ${id}?`,
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => onDeleteUser(id)
        });
    }
    const textEditor = (options)=> {
        return(
            <InputText type="text" 
                value={ options.value }
                onChange={(e) => options.editorCallback(e.target.value)}/>
        )
    }
    const checkboxEditor = (options) => {
        return (
            <Checkbox 
                checked = { options.value }
                onChange={(e) => options.editorCallback(e.target.checked)}/>
        )
    }
  return (
    <div>
        <Button label="Add User" onClick={ onShowUserDialog }/>
        <DataTable
            editMode="row" 
            loading={isLoading} value={ users }
            onRowEditComplete={ onRowEditComplete }
            >
            <Column 
              body={user =><Link to={`${ user.id }`}>{user.id}</Link>} 
              header="Id">
            </Column>
            <Column body={user =>
                    <Link to={`/userwithobject/${ user.id }`} state={{ user }}>{user.id}</Link>} 
              header="Id"></Column>
            <Column field="name" header="Name"
                editor={(options)=>textEditor(options)}
            
            ></Column>
            <Column field="email" header="Email"
                editor={(options)=>textEditor(options)}
            ></Column>
            <Column body={(user)=>{
              return user.active ? "Active": "Inactive"
            }} field="active" header="Active"
                editor={(options) => checkboxEditor(options)}>
                
            </Column>
            <Column rowEditor></Column>
            <Column body={(user)=><Button label="delete" 
                onClick={()=>onConfirmDeleteUser(user.id)}/>}>

            </Column>
        </DataTable>
        
        <Dialog 
            header="Add User" 
            visible={ showUserDialog } 
            style={{ width: '50vw' }} 
            footer={footer}
            onHide={() => setShowUserDialog(false)}>
            
            Name:
            <InputText 
                value={ editingUser.name } 
                onChange={(e) => setEditingUser(prev => {

                    return {
                        ...prev, 
                        name: e.target.value
                    }
                })} /><br/>
            Email:
            <InputText 
                value={ editingUser.email } 
                onChange={(e) => setEditingUser(prev => {
                    
                    return {
                        ...prev, 
                        email: e.target.value
                    }   
                })} 
            /><br/>
            Active:
            <Checkbox 
                checked={editingUser.active}
                onChange={(e)=>setEditingUser(prev => {
                    return {
                        ...prev, 
                        active: e.target.checked
                    }
                })}
                
            />
            

        </Dialog>
        <ConfirmDialog />

    </div>
  )
}
