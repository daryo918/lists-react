import React from "react";
import './TodoSearch.css'
import {TodoContext} from '../TodoContext'


function TodoSearch(){
    const {searchVal,setSearch} = React.useContext(TodoContext);
    
    const onSearchValue=(event)=>{
        console.log(event.target.value)
        setSearch(event.target.value)
    }

    return(
        <React.Fragment>
        <input onChange={onSearchValue} className="todoSearch" placeholder="Buscar" value={searchVal} />
        </React.Fragment>
    );
}
export {TodoSearch};