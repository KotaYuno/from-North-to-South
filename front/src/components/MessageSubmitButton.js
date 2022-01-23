import React from 'react';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import { pushMessage } from '../firebase';
import fetchData from '../hooks/fetchData'///+++



const MessageSubmitButton = ({ inputEl, name, setText, text }) => {
  return (
    <IconButton
      disabled={text === ''}
      onClick={() => {
        pushMessage({ name, text });
        setText('');
        inputEl.current.focus();
        // alert(fetchData(text));///+++
        console.log("aa",fetchData(text));///+++

        
      }}
    >
      <SendIcon />
    </IconButton>
  );
};

export default MessageSubmitButton;
