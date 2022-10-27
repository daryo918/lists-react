import React from 'react';

import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem'
import { CreateTodoButtom } from '../TodoButton';
import {TodoContext} from '../TodoContext'
import {ModalTodo} from '../Modal'
import {LoadingAnim} from '../LoadingAnim'


function AppUi(){
  const  {
            error,
            loading,
            filteredValues,
            completedTodos,
            searchVal,
            CheckcompletedTodo,
            deleteTodo,
            modalOpen
          }=React.useContext(TodoContext);
    

    return (
    <React.Fragment>
        <TodoCounter/>
        <TodoSearch />
    
            <TodoList>
               {loading && (<LoadingAnim></LoadingAnim>) } 
               {error && <p>ERROR SUS DATOS ESTAN COMPROMETIDOS BEEP BEEP</p> } 
               {(!loading && !filteredValues.length) && <p>Crea tu primer todo</p>}
               {filteredValues.map(todo=>(
               <TodoItem key={todo.text} name={todo.text} completed={todo.completed} onAccept={()=>CheckcompletedTodo(todo.text)}
               deleteTodos={()=>deleteTodo(todo.text)}
               />
               ))}
                </TodoList>
        
          
         <CreateTodoButtom /> 
         
         { !! modalOpen &&  (
           <ModalTodo>
              <p>Creacion de Todos</p>
         </ModalTodo>)
         }
         
        </React.Fragment>);
}

export {AppUi}