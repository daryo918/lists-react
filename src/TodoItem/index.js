import react from "react";
import './TodoItem.css'


function TodoItem(props){
    const onDelete=()=>{
        alert('todo eliminado')

    }
    return(
        <li  className={`TodoItem ${props.completed && 'checked'}`}>
            <span onClick={props.deleteTodos} className="closeButton">X</span>
            <div className='modal-content'>
                    <input onClick={props.onAccept} className="item-checkbox" type="checkbox" defaultChecked={props.completed} ></input>
                    <span className='item-description'>{props.name}</span>
            </div>
        </li>
    );
}

export { TodoItem };