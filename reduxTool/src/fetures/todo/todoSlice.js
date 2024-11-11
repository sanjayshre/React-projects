import {createSlice, nanoid} from '@reduxjs/toolkit'

// nanoid is used to create unique id
const initialState = {
    todos: [{id:1, text: "Hello world"}]
}

// create slice is father of reducer
// reducer gets properties and func

// in context we used to declare a func but in redux we define a function

// state-> give access for values in initialstate, In state we get update state value in the store
// actions-> to get values from remove or delete method
// action.payload -> is a object to access[id, email]
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            // add new todo
            // here staes are presevered so we dont us ... like in contextAPI
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

// individual should export reducer
export const {addTodo, removeTodo} = todoSlice.actions

// export as a group
export default todoSlice.reducer