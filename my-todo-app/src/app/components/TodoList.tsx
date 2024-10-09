import React from "react";
import styles from "../page.module.css";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  return (
    <div className={styles.taskListContainer}>
      <h2 className="text-2xl font-bold mb-2">Your Tasks</h2>
      <table className={styles.taskTable}>
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>
                <button
                  onClick={() => onToggle(todo.id)}
                  className={`${styles.statusButton} ${
                    todo.completed ? styles.completed : styles.incomplete
                  }`}
                >
                  {todo.completed ? "Completed" : "Incomplete"}
                </button>
              </td>
              <td>
                <button
                  onClick={() => onDelete(todo.id)}
                  className={styles.deleteButton}
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

export default TodoList;
