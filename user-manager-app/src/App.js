import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';

import "primereact/resources/themes/md-light-deeppurple/theme.css";
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import './App.css';

function App() {

  const navigate = useNavigate();

  const items = [
    {
      label: "Home",
      command: ()=>navigate("/home")
    }, 
    {
      label: "About",
      command: ()=>navigate("/about")
    }, 
    {
      label: "Contact Us",
      command: ()=>navigate("/contact")

    }, 
    {
      label: "Users",
      command: ()=>navigate("/users")

    }, 
  ];
  return (
    <>
      <Menubar 
        start = {<i class="pi pi-users" style={{'fontSize': '2em'}}></i>}
        model={items}/>

      <Outlet/>

    </>
  );
}

export default App;
