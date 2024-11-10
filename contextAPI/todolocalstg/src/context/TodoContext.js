import { createContext, useContext } from "react";

// we just declare the variabls and function , defining is done in app.jsx
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo mgs",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

// above createContext creats and useContext holds it
export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider