import { useState, useEffect } from "react";

URL = "http://127.0.0.1:5000/resive";

const Apitest = () => {

    const data = []
    const textvalue = "投げる"

    const param = {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({ text: textvalue }),
      };

    useEffect(() => {
        fetch(URL, param)
        .then((response) => response.text())
        .then((text_resive) => {
          data = text_resive;
        });
    }, [])
    
      

    return (
        <div>
            <p>{data}</p>
        </div>
    );
};


export default Apitest;