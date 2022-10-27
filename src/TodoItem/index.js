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
                <table className='modal-table'>
                    <tr>
                        <td>Actividad</td>
                        <td>*</td>
                    </tr>
                    <tr>
                        <td><span>{props.name}</span></td>
                        <td> <input onClick={props.onAccept} className="item-checkbox" type="checkbox" defaultChecked={props.completed} ></input></td>
                    </tr>
                </table>
                
               
            </div>
        </li>
    );
}

export { TodoItem };