import React, { useState } from "react";
import Process from "./Process";
import "./Process.css";
import "./Task.css";

const definition = [
  {
    id: "process1",
    title: "Capture Initial Data",
    active: false,
    tasks: [
      {
        id: "Capture KYC",
        title: "Capture KYC",
        active: false,
      },
      {
        id: "Approve Risk",
        title: "Approve Risk",
        active: false,
      },
      {
        id: "Some Decision",
        title: "Some Decision",
        active: false,
        type: "decision",
        outcomes: {
          x: {
            id: "Outcome 1",
            title: "Outcome 1",
            active: false,
          },
          y: {
            id: "Outcome 2",
            title: "Outcome 2",
            active: false,
          },
          // z: {
          //   id: "Outcome 3",
          //   title: "Outcome 3",
          //   active: false,
          // },
        },
      },
      {
        id: "Verify Entity",
        title: "Verify Entity",
        active: false,
      },
    ],
  },
  {
    id: "process2",
    title: "process2",
    active: false,
    tasks: [
      {
        id: "process2 Capture KYC",
        title: "Capture KYC",
        active: false,
      },
      {
        id: "Risk Assessment",
        title: "Risk Assessment",
        active: false,
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
      active: !task.active,
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
      active: !processes[processIndex].active,
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
        active: false,
      };
    });
    processes.push({
      id: Math.random().toString(36).substring(7),
      title: "Change me",
      active: false,
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
        active: false,
      };
    });

    tasksCopy.push({
      id: Math.random().toString(36).substring(7),
      title: "Change me",
      active: false,
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

  const handleSortTasks = (processId, newState, sortable, store) => {
    console.log(newState);
    const process = state.find((x) => x.id === processId);
    const processIndex = state.indexOf(process);
    const processes = [...state];
    processes[processIndex] = {
      ...process,
      tasks: newState.filter((x) => x),
    };
    setState(processes);
  };

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
                  active={process.active}
                  tasks={process.tasks}
                  isLast={idx === state.length - 1}
                  onTaskSelected={handleTaskSelected}
                  onTaskAdd={handleTaskAdd}
                  onTaskRemove={handleTaskRemove}
                  onProcessSelected={handleProcessSelected}
                  onProcessRemove={handleProcessRemove}
                  onAddProcess={handleAddProcess}
                  sortTasks={handleSortTasks}
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
