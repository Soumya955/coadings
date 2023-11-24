import React, { useContext, useState } from "react";
import Modal from "react-modal";
import "./Css-for-Modals/AddTaskModal.css";
import { alertTaskAddedSuccess } from "../Utils/alerts";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { taskADDEDSuccess } from "../Redux/TaskReducer/Action";

export default function AddTaskModal({
  modalIsOpen,
  setModalIsOpen,
}) {

  const dispatch = useDispatch();
  const { todos, isLoading, isError } = useSelector((state) => {
    return {
      todos: state.TaskReducer.data,
      isLoading: state.TaskReducer.isLoading,
      isError: state.TaskReducer.isError,
    };
  }, shallowEqual);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      const newTodo = {
        id: todos.length + 1,
        title: newTask,
        completed: false,
      };
      dispatch(taskADDEDSuccess([newTodo,...todos]))
      setNewTask("");
      alertTaskAddedSuccess()
    }
  };
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        className="Modal"
        ariaHideApp={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <div>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add new task..."
          />
        </div>
        <button
          className="add"
          type="button"
          onClick={() => {
            addTask();
            setModalIsOpen(false);
          }}
        >
          Add Task
        </button>
        <button className="cancel" onClick={() => setModalIsOpen(false)}>
          Cancel
        </button>
      </Modal>
    </>
  );
}
