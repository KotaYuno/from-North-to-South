import React, { useEffect, useRef } from 'react';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { gravatarPath } from '../gravatar';

import fetchData from '../hooks/fetchData';

const useStyles = makeStyles(() => ({
  inline: {
    display: 'inline',
  },
}));

const MessageItem = ({ isLastItem, name, text }) => {
  const ref = useRef(null);
  const classes = useStyles();
  const avatarPath = gravatarPath(name);

  useEffect(() => {
    if (isLastItem) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isLastItem]);

  // const get = () => { 
  //   const selText = document.onselectionchange();
  //   console.log(selText);
  //   const post = () => {fetchData(selText)};
  //   console.log(post());
  //   post()
  // };
  
  


  return (
    <ListItem divider={true} ref={ref}>
      <ListItemAvatar>
        <Avatar src={avatarPath} />
      </ListItemAvatar>

      <ListItemText
        primary={name}
        secondary={
          <Typography
            component="span"
            variant="body2"
            className={classes.inline}
            color="textPrimary"
            // onClick={() => {get()}}
            >
            {text}
          </Typography>
        }
      />
      
    </ListItem>
  );
};

export default MessageItem;
