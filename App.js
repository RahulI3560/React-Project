import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function App() {
  const [todoiiList, setTodoList] = useState([]);
  const [newooTask, setNewTask] = useState("");

  const handleChangeControl = (event) => {
    setNewTask(event.target.value);
  };

  const addMethod = () => {
    const taskassign = {
      id: todoiiList.length === 0 ? 1 : todoiiList[todoiiList.length - 1].id + 1,
      taskName: newooTask,
      completed: false,
    };
    setTodoList(taskassign.taskName !== "" ? [...todoiiList, taskassign] : todoiiList);
  };

  const deleteTask = (id) => {
    setTodoList(todoiiList.filter((tasc) => tasc.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoiiList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <h1 style={{color:"red"}}><b>Todo List</b></h1>
      <div className="addTaskmethod">
        <input onChange={handleChangeControl} placeholder="Enter Item" />
        <button onClick={addMethod}> Add Task</button>
      </div>
      <div className="listmethod">
        {todoiiList.map((assign) => {
          return (
            <Task
              taskName={assign.taskName}
              id={assign.id}
              taskcompleted={assign.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;