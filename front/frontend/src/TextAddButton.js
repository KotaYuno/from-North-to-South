import { IconButton } from "@material-ui/core";
import React from "react";
import SendIcon from '@material-ui/icons/Send';
import 'whatwg-fetch';


const TextAddButton = ({ text }) => {
    // post request
    const requestOptions = {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({text: { text }})
        };
    fetch(url,requestOptions)
        //   resopnse
      
        // ).then((response)=> response.json()
        // ).then((responseJson) =>{
        // console.log(responseJson)
        // }).catch(()=>{
        // console.log("error");
        // })


    const clickSubmit = (e) => {
        console.log("送信完了")
        
    };


      




    return (
        <IconButton
        onClick={() => {
            console.log('送信完了');
        }}
        >

        <SendIcon />
        </IconButton>
    );
};

export default TextAddButton;