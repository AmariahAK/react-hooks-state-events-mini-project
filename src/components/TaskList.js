import React from "react";
import Task from "./Task"; // Import the Task component

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={() => onDeleteTask(task.id)} />
      ))}
    </div>
  );
};

export default TaskList;
