import React, { useState } from "react";


function NameChangeComp(){

    const [sri,setname]= useState ("jazila")

    const handlename=()=>{
        // setname("sri")


    if(sri=="jazila"){

        setname("sri");
    }

    if(sri=="sri"){

        setname("jazila");


    }
};
    
    return(
          <>
            <h1>{sri} </h1>

            <button onClick={handlename}>change</button>



          </>




    )
}


export default NameChangeComp
