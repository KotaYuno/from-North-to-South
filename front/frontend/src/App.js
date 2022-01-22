// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { TextField } from '@material-ui/core';
import TextAddButton from './TextAddButton';


function App() {
  const [text, setText] = useState('');

  return (
    <div className="App">
      
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        <p>ReactとFlaskで通信したい</p>

        {/* <input 
        id="text" 
        type="text" 
        value={content} 
        onChange={(e) => {SVGTextContentElement(e.target.value);}} /> */}

        <TextField 
        setText={setText} 
        onChange={(e) => {setText(e.target.value);}}
        autoFocus
        />

        <TextAddButton></TextAddButton>

        
        
        
       
      
         
        
        
        <div id="add"></div>

        

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > */}
          {/* Learn React
        </a> */}

      
    </div>
  );
}

export default App;
