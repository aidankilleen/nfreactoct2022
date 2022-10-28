import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

const AddTodoForm = () => {

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            id: nanoid(), 
            title, 
            completed: false
        }
        dispatch(addTodo(newTodo));

    }
    const [title, setTitle] = useState("");
    return (
        <>
        <h2>Add New Todo</h2>
        <form onSubmit={onSubmit}>
            <input value={title } onChange={(e)=>setTitle(e.target.value)}/>
            <input type="submit" value="Add"/>
        </form>
        </>
    )
}

export default AddTodoForm;
