import React, { useState } from "react";
import Task from "./Task";
import "./Process.css";

const initialTasks = [
  {
    id: 0,
    title: "Capture KYC Data",
    selected: false,
  },
  {
    id: 1,
    title: "Risk Assessment",
    selected: false,
  },
];

const Process = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleSelected = (id) => {
    const copy = [...tasks];
    copy[id] = {
      ...tasks[id],
      selected: !tasks[id].selected,
    };
    setTasks(copy);
  };

  const handleAdd = (id) => {
    const copy = [...tasks];
    copy[id] = {
      ...tasks[id],
      selected: false,
    };
    copy.push({
      id: tasks.length,
      title: "Change me",
      selected: false,
    });
    setTasks(copy);
  };

  const handleRemove = (id) => {
    const copy = tasks.filter((x) => x.id !== id);
    setTasks(copy);
  };

  return (
    <div
      style={{
        paddingTop: 100,
        display: "flex",

        justifyContent: "center",
      }}
    >
      <div className="tasks-wrapper">
        {tasks.map((task, idx) => {
          return (
            <>
              {idx > 0 && <span style={{ marginLeft: 5 }}>{"---->"}</span>}
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                onClick={handleSelected}
                onAddClick={handleAdd}
                onRemoveClick={handleRemove}
                selected={task.selected}
                isLast={task.id === tasks.length - 1}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Process;
