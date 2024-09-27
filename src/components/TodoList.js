import React from "react";
import TodoCard from "./TodoCard";
const TodoList = ({ todos, onDeleteTodo }) => (
  <div className="todo-list">
    {todos.map((todo, index) => (
      <TodoCard
        key={index}
        title={todo.title}
        description={todo.description}
        onDeleteTodo={onDeleteTodo}
      />
    ))}
  </div>
);

export default TodoList;
