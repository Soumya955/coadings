import React, { useContext, useState } from "react";
import Modal from "react-modal";
import "./Css-for-Modals/AddTaskModal.css";
import { alertTaskAddedSuccess } from "../Utils/alerts";

export default function AddTaskModal({
  todos,
  modalIsOpen,
  setModalIsOpen,
  setTodos,
}) {
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      const newTodo = {
        id: todos.length + 1,
        title: newTask,
        completed: false,
      };
      setTodos([newTodo,...todos]);
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
