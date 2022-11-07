import React from "react";
import {useLocalStorate} from './useLocalStorage'


function useTodos(props){
    const {item:todos, saveItem:saveTodos,loading,error} = useLocalStorate("TODO_V1", [])
    const [searchVal, setSearch] = React.useState("");
    const [modalOpen, setModalOpen]= React.useState(false);
  
    const completedTodos = todos.filter(comp => !!comp.completed).length;
    const totalTodos = todos.length;
  
  
    const CheckcompletedTodo = (text) => {
      console.log('executed')
      const indeChecked = todos.findIndex(elem => elem.text === text)
      const newTodos = [...todos]
      newTodos[indeChecked].completed = !newTodos[indeChecked].completed;
      saveTodos(newTodos)
    }
  
  
    const deleteTodo = (text) => {
      console.log('executed')
      const elems = todos.filter(elem => elem.text !== text);
      saveTodos(elems);
    }
  
  
    let searchedTodos = []
  
    if (searchVal.length >= 1) {
      searchedTodos = todos.filter(comp => comp.text.toLowerCase().includes(searchVal));
    } else {
      searchedTodos = todos
    }
    return {
            loading,
            error,
            totalTodos,
            completedTodos,
            searchedTodos,
            searchVal,
            setSearch,
            deleteTodo,
            CheckcompletedTodo,
            modalOpen, 
            setModalOpen,
            saveTodos,
            todos
    }
  }
export {useTodos};