import { useState } from "react";
import "./CreateTask.css";

function CreateTask(props) {
  const [enteredInfo, setEnteredInfo] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [priorityPicked, setPriorityPicked] = useState("");

  const infoChangeHandler = (event) => {
    setEnteredInfo(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  const priorityHandler = (event) => {
    setPriorityPicked(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const taskData = {
      info: enteredInfo,
      author: enteredAuthor,
      priority: priorityPicked,
    };

    props.onSaveTaskData(taskData);
    setEnteredInfo("");
    setEnteredAuthor("");
    setPriorityPicked("");
  };

  return (
    <form onSubmit={submitHandler} className="CreateTask">
      <div className="TaskInfo">
        <label>To-Do Info </label>
        <input
          type="text"
          onChange={infoChangeHandler}
          className="Input"
          value={enteredInfo}
        />
      </div>
      <div className="Author">
        <label>Author</label>
        <input
          type="text"
          onChange={authorChangeHandler}
          value={enteredAuthor}
        />
      </div>
      <div className="Priority">
        <select onChange={priorityHandler} value={priorityPicked}>
          <option value="priority">Select priority</option>
          <option value="high">High</option>
          <option value="low">Low</option>
        </select>
      </div>
      <div className="BtnSubmit">
        <button type="submit">Add task</button>
      </div>
    </form>
  );
}

export default CreateTask;
