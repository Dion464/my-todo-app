import React from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoTableProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoTable: React.FC<TodoTableProps> = ({ todos, onToggle, onDelete }) => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Todo Table</h2>
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr className="border-b">
            <th className="text-left p-3">Task</th>
            <th className="text-left p-3">Status</th>
            <th className="text-left p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id} className="border-b hover:bg-gray-100 transition">
              <td className="p-3">{todo.title}</td>
              <td className="p-3">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => onToggle(todo.id)}
                  className="mr-2"
                />
                {todo.completed ? "Completed" : "Pending"}
              </td>
              <td className="p-3">
                <button
                  onClick={() => onDelete(todo.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoTable;
