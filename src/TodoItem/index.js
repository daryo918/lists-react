import react from "react";
import './TodoItem.css'




function TodoItem(props){



    const onDelete=()=>{
        alert('todo eliminado')

    }

    return(
        <li  className={`TodoItem ${props.completed && 'checked'}`}>
            <span>{props.name}</span>
            <span onClick={props.deleteTodos} className="closeButton">X</span>
            <br/>
            <input onClick={props.onAccept} className="item-checkbox" type="checkbox"></input>
        </li>
    );
}

export { TodoItem };