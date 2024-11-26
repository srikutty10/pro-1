import React from "react";
import { useForm } from "react-hook-form";
function ReactFormHook(){
    const{register,handleSubmit,formState:{errors}}=useForm()

    const handleform=(data)=>(
        console.log(data)
    )
    console.log(errors)
    return(
        <div> 
            <h1>Reacthookform</h1>
            <label>enter your name</label>:
        <input{...register("firstname",{required:"first name is required"})} placeholder="name"/>
        <p>{errors?.firstname?.message}</p>
        <br></br>
        <br></br>
        
        <label>enter your email</label>:
        <input{...register ("email")}  placeholder="email"/>
        <br></br>
        <br></br>

        <label>enter your age</label>:
        <input {...register("age")}placeholder="age"/>
        <br></br>
        <br></br> 
          <button onClick={handleSubmit(handleform)}>submit</button>







            
        </div>






    









    )

}
export default ReactFormHook