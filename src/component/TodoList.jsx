import axios from "axios";
import React, { useEffect, useState } from "react";
function TodoList(){

    const[data,setdata]=useState([])

    const handlefetch=async()=>{
        let res =await axios.get("http://localhost:3000/todoList")
        setdata(res.data)
       
        

    }
    useEffect(()=>{
        handlefetch()


    },[])
    
    return(
        <div>
            <h1>TodoList</h1>
            <input placeholder="enter your Todo"/>
            <button>add</button>

  {data.map((da,i)=>(
    <div>
        <h1>{i=i+1}.{da.task}</h1>
    </div>

  ))}

  </div>





 )}

export default TodoList;