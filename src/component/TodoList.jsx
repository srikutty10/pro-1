import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function TodoList(){

    const[data,setdata]=useState([])
    const [inputdata,setinputdata]=useState(" ")

    const handlefetch=async()=>{
         let res =await axios.get("http://localhost:3000/todoList")
         setdata(res.data)
    }

    useEffect(()=>{
          handlefetch()
    },[]);
    
    const handleinput=(e)=>{
          setinputdata(e.target.value)
    }

    const handlesend=async()=>{
           let body={task:inputdata,
    }
    
    let res = await axios.post("http://localhost:3000/todoList",body)

    alert("success")

    handlefetch()

    }

    const handledelete=async(id)=>{

        console.log(id);
       
        let res=await axios.delete(`http://localhost:3000/todoList/${id}`)
       
        alert("deleted successfully")
       
        handlefetch()

    }

    const handleedit=async (i)=>{
        let newdata=prompt("enter u r updata task",data[i].task);
        let body={
            id: data[i].id,
            task: newdata
        };
        let res = await axios.put(`http://localhost:3000/todoList/${data[i].id}`,body)
        handlefetch();
    }
    
    return(
        <div className="m=3">
            <h1>TodoList</h1>
            <input onChange={handleinput} placeholder="enter your Todo"/>
            <button onClick={handlesend} className="btn btn-primary ms-3">add</button>

  {data.map((da,i)=>(
    <div className="d-flex mt-5"key={i}>

        <h3> {da.task} </h3>
        <span onClick={()=> handleedit(i)} className="ms-5"><MdEdit /></span>
        <span onClick={()=> handledelete(da.id)} className="ms-5"><MdDelete /> </span>

       
    </div>

  ))}

  </div>





 )}

export default TodoList;