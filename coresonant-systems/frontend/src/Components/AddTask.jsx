import React, { useState } from "react";
import AddTaskModal from "../Modals/AddTaskModal";
import "./css/AddTask.css"

export default function AddTask({ todos, setTodos }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <div
        className="add-task"
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        <span>+</span>
        <span>Add Task</span>
      </div>
      <AddTaskModal
        modalIsOpen={modalIsOpen}
        todos={todos}
        setTodos={setTodos}
        setModalIsOpen={setModalIsOpen}
      />
    </>
  );
}
