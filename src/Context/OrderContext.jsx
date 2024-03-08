import React, { createContext, useContext, useState } from "react";

let orderContext = createContext(null);

export let order = () => {
  let data = useContext(orderContext);
  return data;
};

export let CartcontextProvider = ({ children }) => {
  let qnt=1;    
    let [items,setItems]=useState([]);
  return <orderContext.Provider value={{items,setItems,qnt}}>{children}</orderContext.Provider>;
};
