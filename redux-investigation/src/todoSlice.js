import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({

    name: "todos", 

    initialState:[
        { id:nanoid(), title:"Buy Milk", completed:true },
        { id:nanoid(), title:"Change Bank", completed:false },
        { id:nanoid(), title:"Book Holiday", completed:false },
        { id:nanoid(), title:"Feed Dog", completed:false }
    ],
    reducers:{
        toggleComplete: (state, action) => {
            const index = state.findIndex(todo => todo.id === action.payload.id);
            state[index].completed = action.payload.completed;
        }, 
        addTodo: (state, action) => {
            state.push(action.payload);
        }
    }
});

export default todoSlice.reducer;
export const { toggleComplete, addTodo } = todoSlice.actions;