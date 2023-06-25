import { Button, IconButton, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import '../App.css';
import { db } from '../Firebase/firebase_config';

function TodoListItem({ todo, inprogress, id }) {
  const toggleInProgress = () => {
    db.collection('todos').doc(id).update({
      InProgress: !inprogress
    });
  };

  const deleteTodo = () => {
    db.collection('todos').doc(id).delete();
  };

  return (
    <ListItem>
      <ListItemText
        primary={todo}
        secondary={inprogress ? 'InProgress' : 'Completed'}
      />
      <IconButton onClick={toggleInProgress}>
        {inprogress ? 'Done' : 'Not Done'}
      </IconButton>
      <Button onClick={deleteTodo}>X</Button>
    </ListItem>
  );
}

export default TodoListItem;
