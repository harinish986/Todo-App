import React, { useEffect, useState } from "react";
import { db } from "../Firebase/firebase_config";
import TodoListItem from "./TodoListItem";
import '../App.css';

function TodoList() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("todos").onSnapshot((querySnapshot) => {
      const todos = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        todo: doc.data().todo,
        inprogress: doc.data().InProgress,
      }));
      setTodoList(todos);
    });

    return () => {
      unsubscribe(); // Unsubscribe from the snapshot listener when the component unmounts
    };
  }, []);

  return (
    <div>
      {todoList.map((todo) => (
        <TodoListItem
          key={todo.id}
          id={todo.id}
          todo={todo.todo}
          inprogress={todo.inprogress}
        />
      ))}
    </div>
  );
}

export default TodoList;
