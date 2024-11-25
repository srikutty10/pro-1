import React from "react";

function PropsProductComp({ma}){
return(
    
        <div>
           <h1>{ma.title}</h1>
           <img src={ma.image} height={150} width={150}/>
           <h2>{ma.price}</h2>
        
        
        
         </div>
);
}

export default PropsProductComp;