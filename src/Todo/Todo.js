import React, { useState } from "react";
import '../App.css';
import TextField from '@mui/material/TextField';
import { db } from "../Firebase/firebase_config";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import TodoList from "./TodoList";

function Todo() {
  const [todo, setTodo] = useState('');

  const addTodo = (event) => {
    event.preventDefault();
    db.collection('todos').add({
      InProgress: true,
      time: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todo
    });
    setTodo('');
  };

  const todoChangeHandler = event => {
    setTodo(event.target.value);
  };

  return (
    <div className='text-field'>
      <h1>Todos App</h1>
      <form onSubmit={addTodo}>
        <TextField
          id="standard-basic"
          label="Add Todo"
          variant="standard"
          value={todo}
          onChange={todoChangeHandler}
        />
      </form>
      <TodoList />
    </div>
  );
}

export default Todo;
