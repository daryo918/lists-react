import React from "react";
import './CreateTodoButtom.css'



function CreateTodoButtom({setModalOpen}){
    
    
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