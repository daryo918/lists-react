import react from "react";
import './TodoList.css'

function TodoList(props){
    return(
        <section >
            <ul id="list">
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList};