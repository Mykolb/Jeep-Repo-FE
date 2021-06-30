import React, { useState, useEffect } from "react";


const UseLocalStorage = (key, val) => {
    const stored = localStorage.getItem(key);
    const initial = stored ? JSON.parse(stored) : val;
    const [value, setValue] = useState(initial);
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
  
    return [value, setValue];
}




export default UseLocalStorage;