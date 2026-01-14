
import { useState } from "react";
import { PlusCircle } from "lucide-react";

export default function TodoApp() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [confirmId, setConfirmId] = useState(null);

  function handleAddTodo(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setTodos(todos => [
      ...todos,
      { id: Date.now(), text }
    ]);
    setInput("");
  }

  function handleEditTodo(id, text) {
    setEditingId(id);
    setEditingText(text);
  }

  function handleEditChange(e) {
    setEditingText(e.target.value);
  }

  function handleEditBlur(id) {
    saveEdit(id);
  }

  function handleEditKeyDown(e, id) {
    if (e.key === "Enter") {
      saveEdit(id);
    } else if (e.key === "Escape") {
      setEditingId(null);
    }
  }

  function saveEdit(id) {
    setTodos(todos => todos.map(todo =>
      todo.id === id ? { ...todo, text: editingText.trim() || todo.text } : todo
    ));
    setEditingId(null);
  }

  function handleDeleteTodo(id) {
    setConfirmId(id);
  }

  function confirmDelete() {
    setTodos(todos => todos.filter(todo => todo.id !== confirmId));
    setConfirmId(null);
  }

  function cancelDelete() {
    setConfirmId(null);
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <header className="mb-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Google Todo</h1>
        <p className="text-gray-500">Giao diện tối giản, hiện đại, lấy cảm hứng Google</p>
      </header>
      <main className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <form className="flex gap-2 mb-6" onSubmit={handleAddTodo}>
          <input
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Thêm công việc mới..."
            value={input}
            onChange={e => setInput(e.target.value)}
            autoFocus
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 flex items-center gap-1 font-medium shadow disabled:opacity-50"
            disabled={!input.trim()}
          >
            <PlusCircle size={20} />
            Thêm
          </button>
        </form>
        <ul className="space-y-3">
          {todos.length === 0 && (
            <li className="text-gray-400 text-center">Chưa có công việc nào</li>
          )}
          {todos.map(todo => (
            <li key={todo.id} className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-3">
              {editingId === todo.id ? (
                <input
                  className="flex-1 border border-blue-300 rounded-lg px-2 py-1 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={editingText}
                  onChange={handleEditChange}
                  onBlur={() => handleEditBlur(todo.id)}
                  onKeyDown={e => handleEditKeyDown(e, todo.id)}
                  autoFocus
                />
              ) : (
                <span
                  className="text-gray-800 flex-1 cursor-pointer"
                  onClick={() => handleEditTodo(todo.id, todo.text)}
                  title="Nhấn để sửa"
                >
                  {todo.text}
                </span>
              )}
              <button
                className="text-gray-400 hover:text-red-500 ml-2"
                onClick={() => handleDeleteTodo(todo.id)}
                title="Xóa công việc"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash"><path d="M3 6h18M9 6v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V6m-6 0V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg>
              </button>
            </li>
          ))}
        </ul>
      {/* Modal xác nhận xóa */}
      {confirmId !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-80 text-center">
            <div className="mb-4 text-lg text-gray-800 font-medium">Bạn có chắc muốn xóa công việc này?</div>
            <div className="flex justify-center gap-4 mt-4">
              <button
                className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300"
                onClick={cancelDelete}
              >
                Hủy
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 font-semibold"
                onClick={confirmDelete}
              >
                Xác nhận xóa
              </button>
            </div>
          </div>
        </div>
      )}
      </main>
      <footer className="mt-10 text-xs text-gray-400">Demo UI - thêm todo đã hoạt động</footer>
    </div>
  );
}
