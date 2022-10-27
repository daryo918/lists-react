import React from 'react'
import PortalReactDOM from 'react-dom'
import {TodoContext} from '../TodoContext'
import './modal.css'

function ModalTodo({ children }){
  
  
  const {modalOpen,setModalOpen,todos,saveTodos}=React.useContext(TodoContext);
  
  const closeModalEv=(event)=>{
    if (event.target === event.currentTarget) {
          event.stopPropagation();
          setModalOpen(false)
    }

  }
  
  const saveTodoEv=(event)=>{
      let newElem=[...todos]
      const value=document.querySelector('#content-todo').value
      newElem.push({
        text:value ,completed:false
      });
      saveTodos(newElem);
      setModalOpen(false)
  }
  
  
    return PortalReactDOM.createPortal(
      <div onClick={closeModalEv} className='modal-shadow'>
      <div className='save-modal'>
        <div className='close-modal'>  <span onClick={closeModalEv}>X</span> </div>
          <h2>{children}</h2>
          <textarea id="content-todo" />
          <br/>
          <button onClick={saveTodoEv} className='modal-save-button' type='button'> Guardar </button>
      </div>
      </div>,
      document.getElementById('modal')
      );
}

export {ModalTodo}