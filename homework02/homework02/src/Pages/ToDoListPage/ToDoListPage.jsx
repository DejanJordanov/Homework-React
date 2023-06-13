import CreateTask from "../../Components/CreateTask/CreateTask";
import "./ToDoListPage.css";
import ToDoList from "../../Components/ToDoList/ToDoList";
import { useState } from "react";

const toDoMockData = [
  {
    text: "Do the 2nd homework",
    isFinished: false,
    author: "Dejan",
    priority: "high",
  },
  {
    text: "Go to the gym",
    isFinished: false,
    author: "Dejan",
    priority: "low",
  },
  {
    text: "Buy groceries",
    isFinished: true,
    author: "Dejan",
    priority: "high",
  },
];

function ToDoListPage() {
  const saveTaskDataHandler = (enteredTaskData) => {
    const taskData = {
      ...enteredTaskData,
      id: Math.random().toString(),
      isFinished: false,
    };
    console.log(taskData);
  };

  return (
    <section className="ToDoListPage">
      <CreateTask onSaveTaskData={saveTaskDataHandler} />
      <div className="todo-container">
        {toDoMockData.map((todos, i) => (
          <ToDoList key={todos.text + i} todos={todos} />
        ))}
      </div>
    </section>
  );
}
export default ToDoListPage;
