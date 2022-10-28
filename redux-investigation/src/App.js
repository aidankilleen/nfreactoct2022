import './App.css';
import { useSelector } from 'react-redux';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {

  const todos = useSelector(state => state.todos);
  return (
    <>
      <h1>Redux Example</h1>

      <TodoList/>
      <hr/>

      <AddTodoForm/>
      
      <hr/>
      { JSON.stringify(todos)}
    </>
  );
}

export default App;
