import { useState, useEffect } from "react";

URL = "http://127.0.0.1:5000/resive";

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
        fetch(URL, param)
            .then((response) => response.json())
            .then((res) => {
                console.log(res);
                const list = [];
                for (let i = 0; i < res.data.length; i++) {
                    console.log(res.data[i].mean)
                    list.push(res.data[i].mean)
                }
                // const data = res.data[0].category;
                // console.log('aaaaaaa');
                setData(list)
            })
    }, [])


    return (
        <div>
            <ol>
                {data.map((mean) => (
                    <li> {mean}</li>
                ))}
            </ol>
        </div>
    );
};


export default Apitest;