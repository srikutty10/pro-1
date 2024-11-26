import React, { useEffect, useRef, useState } from "react";
function ErrorHandling(){
    const [count,setcount]=useState(0)
    const inputref=useRef(null)

        //     const handleclick=()=>{try{

        //     setcount(count+1)
        // }
        // catch(err){
        //     console.log(err,"sri")
        // }
        // finally{
        //     console.log("asma")
        // }
        
    // }
    useEffect(()=>{
        inputref.current.focus()
    },[])

    return(

        <div>
            <h1>sri error</h1>
            <input ref={inputref} placeholder="enter u r name"/>
            {/* <button onClick={handleclick} >click</button> */}

        </div>
    )

}
export default ErrorHandling;