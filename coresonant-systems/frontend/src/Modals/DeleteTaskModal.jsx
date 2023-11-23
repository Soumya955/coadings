import React, { useState } from "react";
import Modal from "react-modal";
import "./Css-for-Modals/DeleteTaskModal.css";

export default function DeleteTaskModal({deleteTask,todoId,modalIsOpen, setModalIsOpen }) {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        className="Modal-delete"
        ariaHideApp={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <p>Do you want to delete ?</p>
        <button
        className="delete"
          onClick={() => {
            deleteTask(todoId);
            setModalIsOpen(false);
          }}
        >
          Delete Task
        </button>
        <button className="cancel" onClick={() => setModalIsOpen(false)}>
          Cancel
        </button>
      </Modal>
    </>
  );
}
