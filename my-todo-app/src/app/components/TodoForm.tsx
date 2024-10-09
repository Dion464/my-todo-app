import React, { useState } from "react";
import styles from "../page.module.css";

interface TodoFormProps {
  onAdd: (title: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className={styles.textArea}
        rows={3}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit" className={styles.addButton}>
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
