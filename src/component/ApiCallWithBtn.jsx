import React, { useState } from "react";

function ApiCallWithBtn() {
    const [data, setdata] = useState([]);
    const handleapi = async () => {
        let res = await fetch("https://fakestoreapi.com/products");
        let apidata = await res.json();
        setdata(apidata);

    }
    return (

        <>
            <button onClick={handleapi}>call api</button>

            <div className="jo">
                {data.map((as) => (
                    <div >
                        <img src={as.image} height={80} width={80} />
                        <h5>{as.title}</h5>

                        <h2>{as.price}</h2>
                    </div>

                ))}

            </div>

        </>

    )
}

export default ApiCallWithBtn



