import React, { useEffect, useState } from "react";


function LifeCycleFunComp(){
    const[count,setcount]=useState(0)

    useEffect(()=>{
        console.log("jazilasri");
        return()=>{

        };
     },[count])

     const handleadd=()=>{
        setcount(count+1);


     }


    


return(
    <div>
        <h1>click-{count}</h1>
        <button onClick={handleadd}>Add</button>
    </div>
)}
export default LifeCycleFunComp