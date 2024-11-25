import React, { useState } from "react";
import NameChangeComp from "./NameChangeComp";
function CounterComp(){
    const[ticket,setticket]= useState(0)

    // const handleadd=()=>{
        

    //     setticket(ticket + 1)
        
       
    // }
    // const handlesub=()=>{
    //     setticket(ticket -1)
    // }
    // const handlereset=()=>{
    //     setticket(0)
    // }

    const handleoperation=(AS)=>{

        if(AS=="add"){
            setticket(ticket +1);
        }
        if(AS=="sub"){
            setticket(ticket -1);
        }
        if(AS=="reset"){
            setticket(0);
        }

    }

    return(
        <div >
            <h1>joe-{ticket}</h1>
            <button onClick={()=>handleoperation("add")}>add</button>
            <button onClick={ ()=>handleoperation("sub")}>minus</button>
            <button onClick={ ()=>handleoperation("reset")}>reset</button>



            <NameChangeComp/>

        </div>
    )
}
export default CounterComp;