import React from "react";



function useLocalStorate(itemName, itemValue) {
  const [error,setError] = React.useState(false);
  const [loading,setLoading] = React.useState(true);
  const [item, setItem] = React.useState(itemValue);

    React.useEffect(()=>{
      setTimeout(() => {
        try{
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem;
      
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(itemValue));
          parsedItem = [];
        }
        else {
          parsedItem = JSON.parse(localStorageItem);
        }
      
        setItem(parsedItem)
        setLoading(false);
      }
      catch(error){
        setError(error)
      }
      }, 10000);
    })
     
  
    const saveItem = (item) => {
      try{
      const itemJson = JSON.stringify(item);
      setItem(item);
      localStorage.setItem(itemName, itemJson);
    }
    catch(error){
      setError(error);
    }
    }
    return {item, saveItem,loading,error};
  
  }

  export {useLocalStorate}