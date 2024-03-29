export const Task = (props) => {
    return (
      <div
        className="taskmethod"
        style={{ backgroundColor: props.taskcompleted ? "green" : "white" }}
      >
        <h1>{props.taskName}</h1>
        <button onClick={() => props.completeTask(props.id)}> Completed </button>
        <button onClick={() => props.deleteTask(props.id)}> X </button>
      </div>
    );
  };