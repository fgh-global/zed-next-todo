"use client";
import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  console.log("todos", todos);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (title) => {
    setTodos(todos.filter((todo) => todo.title !== title));
  };

  return (
    <div>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
};

export default TodoContainer;
