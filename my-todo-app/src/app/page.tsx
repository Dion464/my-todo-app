"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import styles from "./page.module.css";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const Page: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get<Todo[]>(
          "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  const addTodo = async (title: string) => {
    const newTodo = { title, completed: false };
    try {
      const response = await axios.post<Todo>(
        "https://jsonplaceholder.typicode.com/todos",
        newTodo
      );
      setTodos((prevTodos) => [...prevTodos, response.data]);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const toggleTodo = async (id: number) => {
    const todoToUpdate = todos.find((todo) => todo.id === id);
    if (todoToUpdate) {
      const updatedTodo = {
        ...todoToUpdate,
        completed: !todoToUpdate.completed,
      };
      try {
        await axios.put(
          `https://jsonplaceholder.typicode.com/todos/${id}`,
          updatedTodo
        );
        setTodos((prevTodos) =>
          prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
        );
      } catch (error) {
        console.error("Error updating todo:", error);
      }
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo App</h1>
      <div className={styles.formContainer}>
        <TodoForm onAdd={addTodo} />
      </div>
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
};

export default Page;
