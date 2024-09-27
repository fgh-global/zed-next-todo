import React from "react";

import "./TodoCard.css";
const TodoCard = ({ title, description, onDeleteTodo }) => (
  <div className="todo-card">
    <button className="delete-button" onClick={() => onDeleteTodo(title)}>
      x
    </button>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default TodoCard;
