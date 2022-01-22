import { useState, useEffect } from "react";
import axios from 'axios'

axios.defaults.withCredentials = true; 

URL = "http://127.0.0.1:5000/resive";
// URL = "https://jsonplaceholder.typicode.com/posts";

const Apitest = () => {

    const [data, setData] = useState([])

    const textvalue = "渡す";

    const param = {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({ text: textvalue }),
      };
      

    useEffect(() => {
        // axios.post(URL, {
        //         text: textvalue
        //     }).then(function(res) {
        //         setData(res);
        //     })

        // fetch(URL, param)
        // .then((response) => response.text())
        // .then((text_resive) => {
        //   setData(text_resive);
        // });

        fetch(URL, param)
        .then((response) => {
            console.log(response);
            setData(response)
        });
    }, [])
    
    

    return (
        <div>
           {data}            
        </div>
    );
};


export default Apitest;