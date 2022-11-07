import React from 'react';
import { useTodos } from './useTodos';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButtom } from '../TodoButton';
import { ModalTodo } from '../Modal';
import { LoadingAnim } from '../LoadingAnim'
import { TodoError } from '../TodoError';
import { TodoLoading } from '../TodoLoading';

import './App.css';



function App(props) {

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    filteredValues,
    deleteTodo,
    modalOpen,
    todos,
    saveTodos,
    setModalOpen,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
    CheckcompletedTodo
  } = useTodos();

  return (
    <React.Fragment>
    <TodoCounter 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      />
    <TodoSearch
      searchVal={searchValue}
      setSearch={setSearchValue}
    />

    <TodoList
    error={error}
    onError={()=>{<TodoError />}}
    loading={loading}
    onLoading={()=><TodoLoading />}
    searchedTodos={searchedTodos}
    onEmptyTodos={()=><onEmptyTodos />}
    render={todo =>
        <TodoItem 
      key={todo.text} 
      name={todo.text} 
      completed={todo.completed} 
      onAccept={()=>CheckcompletedTodo(todo.text)}
      deleteTodos={()=>deleteTodo(todo.text)}
      />      
 }
    >


    </TodoList>

{/*         <TodoList>
           {loading && (<LoadingAnim></LoadingAnim>) } 
           {error && <p>ERROR SUS DATOS ESTAN COMPROMETIDOS BEEP BEEP</p> } 
           {(!loading && !filteredValues.length) && <p>Crea tu primer <a href='#' onClick={()=>setModalOpen(true)} >todo</a></p>}
           {filteredValues.map(todo=>(
           <TodoItem 
                key={todo.text} 
                name={todo.text} 
                completed={todo.completed} 
                onAccept={()=>CheckcompletedTodo(todo.text)}
                deleteTodos={()=>deleteTodo(todo.text)}
           />
           ))}
            </TodoList> */}
     <CreateTodoButtom
      setModalOpen={setModalOpen}
     /> 
     { 
      !! modalOpen &&  
        (
          <ModalTodo
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              todos={todos}
              saveTodos={saveTodos}
          >
              <p>Creacion de Todos</p>
          </ModalTodo>
        )
     }
     
    </React.Fragment>
  );
}

export default App;
