import "./ToDoList.css";
import { useState } from "react";

function ToDoList({ todos }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="Todo">
      <div
        onClick={handleClick}
        className="Circle"
        style={{ backgroundColor: active ? "lightgreen" : "red" }}
      ></div>
      <div className="Text">{todos.text}</div>
      <div className="ToDoAuthor">{todos.author}</div>
    </div>
  );
}

export default ToDoList;
