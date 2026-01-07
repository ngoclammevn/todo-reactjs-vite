
import React, { useState } from "react";
import { Plus, Trash2 } from "lucide-react";


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
    <div className="w-full max-w-lg mx-auto p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8 tracking-tight text-gray-900">Todo App</h2>
      <form onSubmit={addTodo} className="flex gap-3 mb-6">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add a new todo"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
          aria-label="Add a new todo"
        />
        <button
          type="submit"
          className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Add todo"
        >
          <Plus size={20} />
        </button>
      </form>
      <ul className="divide-y divide-gray-200">
        {todos.map(todo => (
          <li
            key={todo.id}
            className={
              `flex items-center justify-between py-3` +
              (todo.completed ? " line-through text-gray-400" : " text-gray-900")
            }
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              className="flex-1 cursor-pointer select-none text-lg"
              title="Toggle complete"
              data-testid="todo-text"
              tabIndex={0}
              role="button"
              aria-pressed={todo.completed}
              onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button
              onClick={() => removeTodo(todo.id)}
              className="flex items-center justify-center bg-transparent border-none text-red-600 text-xl cursor-pointer ml-2 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-400"
              title="Remove"
              aria-label="Remove todo"
            >
              <Trash2 size={20} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
