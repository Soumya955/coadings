import React, { useContext, useRef, useState } from "react";
import Modal from "react-modal";
import "./Css-for-Modals/UpdateTaskModal.css";

export default function UpdateTaskModal({
  editTask,
  todoId,
  title,
  modalIsOpen,
  setModalIsOpen,
}) {
  const [value, setvalue] = useState(title);

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        className="Modal-update"
        ariaHideApp={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <div className="form-group">
          <input
            type="text"
            value={value}
            onChange={(e) => setvalue(e.target.value)}
          />
        </div>
        <button
          className="add"
          onClick={() => {
            value&&editTask(todoId, value);
            setModalIsOpen(false);
          }}
        >
          Update Task
        </button>
        <button className="cancel" onClick={() => setModalIsOpen(false)}>
          Cancel
        </button>
      </Modal>
    </>
  );
}
