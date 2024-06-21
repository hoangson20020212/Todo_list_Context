import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const AddTodo: React.FC = () => {
  const [text, setText] = useState("");
  const context = useContext(TodoContext);

  if (!context) {
    return null;
  }

  const { addTodo } = context;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="input_text"
      />
      <button type="submit" className="btn">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
