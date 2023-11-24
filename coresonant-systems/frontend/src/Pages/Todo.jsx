import React, { useEffect, useState } from "react";
import "./css/Todo.css";
import Navbar from "../Components/Navbar";
import TodoCard from "../Components/TodoCard";
import AddTask from "../Components/AddTask";
import { Spinner } from '@chakra-ui/react'
import { alertdeleteSuccess, alertupdateSuccess } from "../Utils/alerts";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  taskDELETESuccess,
  taskGETFailure,
  taskGETRequest,
  taskGETSuccess,
  taskUPDATESuccess,
} from "../Redux/TaskReducer/Action";
import FilteredCard from "../Components/FilteredCard";

export default function Todo() {
  const [showCompleted, setShowCompleted] = useState(false);

  const dispatch = useDispatch();
  const { todos, isLoading, isError } = useSelector((state) => {
    return {
      todos: state.TaskReducer.data,
      isLoading: state.TaskReducer.isLoading,
      isError: state.TaskReducer.isError,
    };
  }, shallowEqual);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    dispatch(taskGETRequest());
    fetch("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((res) => res.json())
      .then((res) => {
        dispatch(taskGETSuccess(res));
      })
      .catch((error) => {
        dispatch(taskGETFailure());
        console.error("Error fetching todos:", error);
      });
  };

  const toggleCompletion = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    dispatch(taskGETSuccess(updatedTodos));
  };

  const editTask = (id, newTitle) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title: newTitle } : todo
    );
    dispatch(taskUPDATESuccess(updatedTodos));
    alertupdateSuccess();
  };

  const deleteTask = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    dispatch(taskDELETESuccess(updatedTodos));
    alertdeleteSuccess();
  };

  const filteredTodos = showCompleted
    ? todos.filter((todo) => todo.completed)
    : todos;

  return (
    <div>
      <Navbar />
      <h1>Todo List</h1>
      <AddTask />
      <FilteredCard
        showCompleted={showCompleted}
        setShowCompleted={setShowCompleted}
      />
      {isLoading&& <div className="loading-spinner"><Spinner
        thickness="5px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="md"
      />...Loading</div>}
     
      <ul className="todo-list">
        {filteredTodos?.map((todo) => (
          <li key={todo.id}>
            <TodoCard
              todo={todo}
              toggleCompletion={toggleCompletion}
              editTask={editTask}
              deleteTask={deleteTask}
              isLoading={isLoading}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
