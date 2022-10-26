import react from "react";
import './CreateTodoButtom.css'



function CreateTodoButtom(){
    const modalClick=(msg)=>{
        alert(msg);
    }


    return(
        <button className="CreateTodoButtom"
        onClick={()=>modalClick('dio click >:')}
        >+</button>
    );
}

export { CreateTodoButtom};