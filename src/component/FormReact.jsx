import React, { useState } from "react";
function FormReact(){
    const[name,setname]=useState("");
    const[email,setemail]=useState("");
    const[age,setage]=useState("");

    const handlename= (as) =>{
        setname(as.target.value)
    }
    const handleemail= (as) =>{
        setemail(as.target.value)
    }
    const handleage= (as) =>{
        setage(as.target.value)
    }

    return(
        <div>
            <label>enter your name</label>:
            <input onChange={handlename} placeholder="name"/>
            <br></br>
            <br></br>
            
            <label>enter your email</label>:
            <input onChange={handleemail} placeholder="email"/>
            <br></br>
            <br></br>

            <label>enter your age</label>:
            <input onChange={handleage} placeholder="age"/>
            <br></br>
            <br></br>

            <button>submit</button>
            <div>
                <h1>name-{name}</h1>
                <h1>email-{email}</h1>
                <h1>age-{age}</h1>
            </div>

  </div>
  )
}
export default FormReact
