import { useDispatch } from "react-redux";
import { toggleComplete } from "./todoSlice";

const TodoItem = ({todo}) => {

    const dispatch = useDispatch();
    const {id, title, completed} = todo;

    const onChange = () => {
        dispatch(toggleComplete({id, completed:!completed}))
    }
    return (
        <li style={{ 
            textDecoration: completed ? "line-through" : "initial"
            }}>
            { title }
            <input 
                type="checkbox" 
                checked={completed}
                onChange={onChange}/>
        </li>
    )
}

export default TodoItem;
