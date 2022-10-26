import logo from './logo.svg';
import './App.css';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import { Button } from 'primereact/button';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { useState } from 'react';
import { Toast } from 'primereact/toast';
import { useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function App() {

  const users = [
    {
      "id": 1,
      "name": "Alice",
      "email": "alice@gmail.com",
      "active": true
    },
    {
      "id": 2,
      "name": "Bob",
      "email": "bob@gmail.com",
      "active": true
    },
    {
      "id": 3,
      "name": "Carol",
      "email": "carol@gmail.com",
      "active": false
    },
    {
      "id": 4,
      "name": "Dan",
      "email": "dan@gmail.com",
      "active": true
    },
    {
      "id": 5,
      "name": "Eve",
      "email": "eve@gmail.com",
      "active": false
    },
    {
      "name": "New User",
      "email": "new.user@gmail.com",
      "active": false,
      "id": 6
    }
  ];

  const toast = useRef();

  const [visible, setVisible] = useState(false);

  const onDelete = ()=> {
    setVisible(true);
  }

  const onAccept = () => {
    toast.current.show({
      severity:'success', 
      summary: 'Message Deleted', 
      life: 3000
    });
  }
  const onReject = () => {
    toast.current.show({
      severity:'warn', 
      summary: 'Not deleted', 
      life: 3000
    });    
  }
  return (
    <>
      <Toast ref={toast} />
      <ConfirmDialog
        visible={visible} 
        onHide={ () => setVisible(false) } 
        message="Are you sure you want to proceed?"
        header="Confirmation" 
        icon="pi pi-exclamation-triangle" 
        accept={ onAccept } 
        reject={ onReject } 
      />
      <Button onClick={()=>alert("is this working?")}label="Press Me"/>

      <Button  icon="pi pi-user" className="p-button-rounded p-button-secondary" aria-label="Bookmark" />

      <hr/>

      <Accordion>
    <AccordionTab header="Header I">
        Content I
    </AccordionTab>
    <AccordionTab header="Header II">
        Content II
    </AccordionTab>
    <AccordionTab header="Header III">
        Content III
    </AccordionTab>
</Accordion>

<Button onClick={ onDelete }icon="pi pi-trash" 
    className="p-button-rounded p-button-danger" 
aria-label="Delete" />

<hr/>
<DataTable value={users}>
            <Column 
              body={user =><a href={`users/${ user.id }`}>{user.id}</a>} 
              header="Id">
              
            </Column>
            <Column field="name" header="Name"></Column>
            <Column field="email" header="Email"></Column>
            <Column body={(user)=>{
              return user.active ? "Active": "Inactive"
            }} header="Active"></Column>
        </DataTable>


    </>
  );
}

export default App;
