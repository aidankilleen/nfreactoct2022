import Accordion from './Accordion';
import './App.css';

function App() {

  let accordionItems = [

    { id: 1, title: "Item 1", text: "this is item 1", expanded: true }, 
    { id: 2, title: "Item 2", text: "this is item 2", expanded: false }, 
    { id: 3, title: "Item 3", text: "this is item 3", expanded: false }, 
    { id: 4, title: "Item 4", text: "this is item 4", expanded: false }
  ];

  let newsItems = [
    { id: 1, title: "News Item 1", text: "this is news item 1", expanded: true }, 
    { id: 2, title: "News Item 2", text: "this is news item 2", expanded: false }, 
    { id: 3, title: "News Item 3", text: "this is news item 3", expanded: false }

  ]

  return (
    <>
      <h1>Accordion Investigation</h1>
      <Accordion items={accordionItems}/>
      <hr/>
      <Accordion items = {newsItems}/>

    </>
  );
}

export default App;
