import React, { useState } from "react";

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
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Todo App</h2>
      <form onSubmit={addTodo} className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add a new todo"
          className="flex-1 p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800">Add</button>
      </form>
      <ul className="list-none p-0 m-0">
        {todos.map(todo => (
          <li
            key={todo.id}
            className={
              `flex items-center justify-between py-2 border-b border-gray-200` +
              (todo.completed ? " line-through text-gray-400" : "")
            }
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              className="flex-1 cursor-pointer"
              title="Toggle complete"
              data-testid="todo-text"
            >
              {todo.text}
            </span>
            <button
              onClick={() => removeTodo(todo.id)}
              className="bg-none border-none text-red-600 text-xl cursor-pointer ml-2 hover:text-red-800"
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
