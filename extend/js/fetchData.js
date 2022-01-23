// import { useState, useEffect } from "react";

// URL = "http://127.0.0.1:5000/resive";
URL = "https://eqitter.herokuapp.com/resive";

const fetchData = (textvalue) => {

    // const [data, setData] = useState([])
    const data = []

    // const textvalue = "渡す";

    const param = {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({ text: textvalue }),
      };
    

    fetch(URL, param)
        .then((response) => response.json())
        .then((res) => {
            for (let i = 0; i < res.data.length; i++) {
                console.log(res.data[i].mean)
                data.push(res.data[i].mean)
            }
            return data[0]
        })

};


export default fetchData;