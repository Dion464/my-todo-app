import React from "react";

interface TodoItemProps {
  todo: { id: number; title: string; completed: boolean };
  onToggle: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle }) => {
  return (
    <div
      onClick={() => onToggle(todo.id)}
      className={`p-2 border-b cursor-pointer ${
        todo.completed ? "line-through text-gray-400" : "text-black"
      }`}
    >
      {todo.title}
    </div>
  );
};

export default TodoItem;
