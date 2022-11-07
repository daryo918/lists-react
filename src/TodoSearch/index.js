import React from "react";
import './TodoSearch.css'


function TodoSearch({searchVal,setSearch}){
    
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