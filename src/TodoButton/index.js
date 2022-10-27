import React from "react";
import {TodoContext} from '../TodoContext'
import './CreateTodoButtom.css'



function CreateTodoButtom(){
    
    const {setModalOpen} = React.useContext(TodoContext)
    
    const modalClick=(msg)=>{
        console.log('uwu')
        setModalOpen(true);
    }


    return(
        <button className="CreateTodoButtom"
        onClick={()=>modalClick('dio click >:')}
        >+</button>
    );
}

export { CreateTodoButtom};