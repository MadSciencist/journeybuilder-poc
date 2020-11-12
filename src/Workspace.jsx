import React, { useState } from "react";
import Process from "./Process";
import "./Process.css";
import "./Task.css";

const definition = [
  {
    id: "process1",
    title: "Capture Initial Data",
    selected: false,
    tasks: [
      {
        id: "Capture KYC Data",
        title: "Capture KYC Data",
        selected: false,
      },
      {
        id: "Risk Assessment",
        title: "Risk Assessment",
        selected: false,
      },
    ],
  },
  {
    id: "process2",
    title: "process2",
    selected: false,
    tasks: [
      {
        id: "process2 Capture KYC Data",
        title: "process2 Capture KYC Data",
        selected: false,
      },
      {
        id: "process2R isk Assessment",
        title: "process2 Risk Assessment",
        selected: false,
      },
    ],
  },
];

const Workspace = ({ title }) => {
  const [state, setState] = useState(definition);

  const handleTaskSelected = (processId, taskId) => {
    const process = state.find((x) => x.id === processId);
    const processIndex = state.indexOf(process);

    const task = process.tasks.find((x) => x.id === taskId);
    const taskIndx = process.tasks.indexOf(task);

    const tasksCopy = [...process.tasks];
    tasksCopy[taskIndx] = {
      ...task,
      selected: !task.selected,
    };

    const processes = [...state];
    processes[processIndex] = {
      ...process,
      tasks: tasksCopy,
    };

    setState(processes);
  };

  const handleProcessSelected = (processId) => {
    const process = state.find((x) => x.id === processId);
    const processIndex = state.indexOf(process);
    const processes = [...state];
    processes[processIndex] = {
      ...process,
      selected: !processes[processIndex].selected,
    };
    setState(processes);
  };

  const handleProcessRemove = (processId) => {
    setState(state.filter((p) => p.id !== processId));
  };

  const handleAddProcess = (processId) => {
    const processes = state.map((x) => {
      return {
        ...x,
        selected: false,
      };
    });
    processes.push({
      id: Math.random().toString(36).substring(7),
      title: "Change me",
      selected: false,
      tasks: [
        { id: Math.random().toString(36).substring(7), title: "Change me" },
      ],
    });
    setState(processes);
  };

  const handleTaskAdd = (processId, taskId) => {
    const process = state.find((x) => x.id === processId);
    const processIndex = state.indexOf(process);

    const tasksCopy = process.tasks.map((t) => {
      return {
        ...t,
        selected: false,
      };
    });

    tasksCopy.push({
      id: Math.random().toString(36).substring(7),
      title: "Change me",
      selected: false,
    });

    const processes = [...state];
    processes[processIndex] = {
      ...process,
      tasks: tasksCopy,
    };
    setState(processes);
  };

  const handleTaskRemove = (processId, taskId) => {
    const process = state.find((x) => x.id === processId);
    const processIndex = state.indexOf(process);
    const tasks = process.tasks.filter((x) => x.id !== taskId);
    const processes = [...state];
    processes[processIndex] = {
      ...process,
      tasks: tasks,
    };

    setState(processes);
  };

  console.log(state);

  return (
    <div style={{ width: "100%", height: "100%", marginTop: 50 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="process-wrapper">
          <span className="process-text">{title}</span>
          {state.map((process, idx) => {
            return (
              <>
                {idx > 0 && <span style={{ marginLeft: 5 }}>{"---->"}</span>}
                <Process
                  key={process.id}
                  id={process.id}
                  title={process.title}
                  selected={process.selected}
                  tasks={process.tasks}
                  isLast={idx === state.length - 1}
                  onTaskSelected={handleTaskSelected}
                  onTaskAdd={handleTaskAdd}
                  onTaskRemove={handleTaskRemove}
                  onProcessSelected={handleProcessSelected}
                  onProcessRemove={handleProcessRemove}
                  onAddProcess={handleAddProcess}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Workspace;
