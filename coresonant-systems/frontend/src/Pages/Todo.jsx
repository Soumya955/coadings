import React, { useEffect, useState } from "react";
import "./css/Todo.css";
import Navbar from "../Components/Navbar";
import TodoCard from "../Components/TodoCard";
import AddTask from "../Components/AddTask";
import { Switch } from "@chakra-ui/react";
import { alertdeleteSuccess, alertupdateSuccess } from "../Utils/alerts";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    fetch("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Error fetching todos:", error));
  };

  const toggleCompletion = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const editTask = (id, newTitle) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title: newTitle } : todo
    );
    setTodos(updatedTodos);
    alertupdateSuccess()
  };

  const deleteTask = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    alertdeleteSuccess();
  };

  const filteredTodos = showCompleted
    ? todos.filter((todo) => todo.completed)
    : todos;
  console.log(todos);

  return (
    <div>
      <Navbar />
      <h1>Todo List</h1>
      <AddTask todos={todos} setTodos={setTodos} />
      <div className="filter-completed">
        <label>Show Completed Tasks:</label>
        <Switch
          checked={showCompleted}
          onChange={() => setShowCompleted(!showCompleted)}
          size="lg"
        />
      </div>
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <TodoCard
              todo={todo}
              toggleCompletion={toggleCompletion}
              editTask={editTask}
              deleteTask={deleteTask}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
