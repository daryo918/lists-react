import react from "react";
import './TodoList.css'

function TodoList(props){
    return(
        <section className="todo-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            <ul id="list">
                {props.searchedTodos.map(props.render)}
            </ul>
        </section>
    );
}

export { TodoList};