/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

export const todoContext = createContext({
    todos:[
        {
            id:1,
            todo:"Todo Msg",
            completed:false
        }
    ],
    // eslint-disable-next-line no-unused-vars
    addTodo:(todo) =>{},
    updateTodo:(id, todo) =>{},
    deleteTodo:(id) =>{},
    toggleComplete:(id) =>{},
})

export const TodoProvider = todoContext.Provider

export const useTodo = () =>{
    return useContext(todoContext);
}