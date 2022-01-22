import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import TextAddButton from './TextAddButton';

const MessageInputField = () => {
    const [text, setText] = useState('');

    return (
        <>
            <TextField 
                setText={setText} 
                text={text}
                onChange={(e) => {setText(e.target.value);}}
                autoFocus
            />

            <TextAddButton />

        </>
        
        
    );
};


export default MessageInputField;