// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';


import MessageInputField from './MessageInputField';


function App() {
  

  return (
    <div className="App">
      
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        <p>ReactとFlaskで通信したい</p>

        {/* <input 
        id="text" 
        type="text" 
        value={content} 
        onChange={(e) => {SVGTextContentElement(e.target.value);}} /> */}

        <MessegeInputField />
        

        

        
        
    
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
