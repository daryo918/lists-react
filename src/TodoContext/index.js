import React from "react";
import {useLocalStorate} from './useLocalStorage'


const TodoContext=React.createContext();


 const defaultTodos=[{
  text:'cebolla' ,completed:false},
  {
    text:'abolla' ,completed:false},
    {
      text:'guabolla' ,completed:true},
]

function TodoProvider(props){
    const {item:todos, saveItem:saveTodos,loading,error} = useLocalStorate("TODO_V1", [])
    const [searchVal, setSearch] = React.useState("");
    const [modalOpen, setModalOpen]= React.useState(false);
  
    const completedTodos = todos.filter(comp => !!comp.completed).length;
    const totalTodos = todos.length;
  
  
    const CheckcompletedTodo = (text) => {
      console.log('executed')
      const indeChecked = todos.findIndex(elem => elem.text === text)
      const newTodos = [...todos]
      newTodos[indeChecked].completed = true;
      saveTodos(newTodos)
    }
  
  
    const deleteTodo = (text) => {
      console.log('executed')
      const elems = todos.filter(elem => elem.text !== text);
      saveTodos(elems);
    }
  
  
    let filteredValues = []
  
    if (searchVal.length >= 1) {
      filteredValues = todos.filter(comp => comp.text.toLowerCase().includes(searchVal));
    } else {
      filteredValues = todos
    }
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchVal,
            setSearch,
            deleteTodo,
            CheckcompletedTodo,
            filteredValues,
            modalOpen, 
            setModalOpen,
            saveTodos,
            todos
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export {TodoContext,TodoProvider};