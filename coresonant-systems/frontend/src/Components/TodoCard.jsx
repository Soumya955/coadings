import React, { useState } from "react";
import "./css/TodoCard.css";
import { RiPencilFill, RiDeleteBin6Fill } from "react-icons/ri";
import DeleteTaskModal from "../Modals/DeleteTaskModal";
import UpdateTaskModal from "../Modals/UpdateTaskModal";

export default function TodoCard({
  todo,
  toggleCompletion,
  editTask,
  deleteTask,
}) {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalIsOpen1, setModalIsOpen1] = useState(false);
    
  return (
    <div className={`todo-card ${todo.completed ? "completed" : ""}`}>
      <span
        className="task-title"
        onClick={() => toggleCompletion(todo.id)}
        style={{ width:"80%",textAlign:"left", textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.title}
      </span>
     
      <div className="button-group">
      <span style={{color:'yellow'}}>
      {todo.completed?"Completed":""}
      </span>
        <RiPencilFill
         style={{color:"blue"}}
          onClick={() =>{setModalIsOpen(true)}}
        />
        <RiDeleteBin6Fill  style={{color:"red"}} onClick={() =>{setModalIsOpen1(true)}} />
      </div>
      <DeleteTaskModal deleteTask={deleteTask} todoId={todo.id} modalIsOpen={modalIsOpen1} setModalIsOpen={setModalIsOpen1} />
      <UpdateTaskModal editTask={editTask} todoId={todo.id} title={todo.title} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    
    </div>
    
  );
}
