import React, { useState } from "react";
import "./TodoApp.css";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function addTodo(e) {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([
      ...todos,
      { text: input.trim(), completed: false, id: Date.now() },
    ]);
    setInput("");
  }

  function toggleTodo(id) {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="todo-app">
      <h2>Todo App</h2>
      <form onSubmit={addTodo} className="todo-form">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add a new todo"
          className="todo-input"
        />
        <button type="submit" className="todo-add-btn">Add</button>
      </form>
      <ul className="todo-list">
        {todos.map(todo => (
          <li
            key={todo.id}
            className={"todo-item" + (todo.completed ? " completed" : "")}
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              className="todo-text"
              title="Toggle complete"
              data-testid="todo-text"
            >
              {todo.text}
            </span>
            <button
              onClick={() => removeTodo(todo.id)}
              className="todo-remove-btn"
              title="Remove"
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
