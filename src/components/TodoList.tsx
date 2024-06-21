import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoList: React.FC = () => {
  const context = useContext(TodoContext);

  if (!context) {
    return null;
  }

  const { todos, toggleTodo } = context;

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
          <button onClick={() => toggleTodo(todo.id)} className="complete-btn">
            Complete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
