import React, { useState } from "react";
import { PanZoom } from "react-easy-panzoom";
import { useKeyPress } from "../useKeyPress";
import Stage from "./Stage/Stage";
import StageArrow from "./StageArrow";

const initialStages = [
  {
    id: "stage1",
    title: "Stage one",
    processes: [
      {
        id: "proc1",
        title: "First Process",
        tasks: [
          { id: 123, title: "Capture KYC Data" },
          { id: 123444, title: "Risk Assessment" },
        ],
      },
      {
        id: "proc2",
        title: "Second Process",
        tasks: [
          { id: 123, title: "Capture KYC Data" },
          { id: 123444, title: "Risk Assessment" },
        ],
      },
    ],
  },
  {
    id: "stage2",
    title: "Stage Two",
    processes: [
      {
        id: "proc3",
        title: "First Process",
        tasks: [
          { id: 123, title: "Capture KYC Data" },
          { id: 123444, title: "Risk Assessment" },
        ],
      },
      {
        id: "proc4",
        title: "Second Process",
        tasks: [
          { id: 123, title: "Capture KYC Data" },
          { id: 123444, title: "Risk Assessment" },
        ],
      },
    ],
  },
  {
    id: "stage3",
    title: "Stage Three",
    processes: [
      {
        id: "proc3",
        title: "First Process",
        tasks: [
          { id: 123, title: "Capture KYC Data" },
          { id: 123444, title: "Risk Assessment" },
        ],
      },
      {
        id: "proc4",
        title: "Second Process",
        tasks: [
          { id: 123, title: "Capture KYC Data" },
          { id: 123444, title: "Risk Assessment" },
        ],
      },
    ],
  },
];

const randomId = () => Math.random().toString(36).substring(7);

const Workspace = () => {
  const shiftPress = useKeyPress("Control");
  const [stages, setStages] = useState(initialStages);

  const unselectAll = () => {
    const stagesCopy = stages.map((stage) => {
      return {
        ...stage,
        active: false,
        processes: stage.processes.map((proc) => {
          return {
            ...proc,
            active: false,
            tasks: proc.tasks.map((task) => {
              return {
                ...task,
                active: false,
              };
            }),
          };
        }),
      };
    });
    setStages(stagesCopy);
  };

  const handleWrapperClick = (ev) => {
    if (ev.target.className?.includes("zoomable-area")) {
      unselectAll();
    }
  };

  const handleStageActive = (stageId) => {
    const stage = stages.find((stage) => stage.id === stageId);
    const stageIndex = stages.indexOf(stage);
    const stagesCopy = [...stages];

    stagesCopy[stageIndex] = {
      ...stage,
      active: !stage.active,
    };
    setStages(stagesCopy);
  };

  const handleProcessActive = (stageId, processId) => {
    const stage = stages.find((stage) => stage.id === stageId);
    const stageIndex = stages.indexOf(stage);
    const stagesCopy = [...stages];

    const process = stage.processes.find((proc) => proc.id === processId);
    const processIndex = stage.processes.indexOf(process);
    const processesCopy = [...stage.processes];
    processesCopy[processIndex] = {
      ...process,
      active: !process.active,
    };

    stagesCopy[stageIndex] = {
      ...stage,
      processes: processesCopy,
    };
    setStages(stagesCopy);
  };

  const handleTaskActive = (stageId, processId, taskId) => {
    const stage = stages.find((stage) => stage.id === stageId);
    const stageIndex = stages.indexOf(stage);
    const stagesCopy = [...stages];

    const process = stage.processes.find((proc) => proc.id === processId);
    const processIndex = stage.processes.indexOf(process);

    const task = process.tasks.find((task) => task.id === taskId);
    const taskIndex = process.tasks.indexOf(task);

    const tasksCopy = [...process.tasks];
    tasksCopy[taskIndex] = {
      ...task,
      active: !task.active,
    };

    const processesCopy = [...stage.processes];
    processesCopy[processIndex] = {
      ...process,
      tasks: tasksCopy,
    };

    stagesCopy[stageIndex] = {
      ...stage,
      processes: processesCopy,
    };
    setStages(stagesCopy);
  };

  const handleAddTask = (stageId, processId, taskId) => {
    const stage = stages.find((stage) => stage.id === stageId);
    const stageIndex = stages.indexOf(stage);

    const process = stage.processes.find((proc) => proc.id === processId);
    const processIndex = stage.processes.indexOf(process);
    const processTasks = [
      ...process.tasks,
      { id: randomId(), title: "New Task" },
    ];
    const processesCopy = [...stage.processes];
    processesCopy[processIndex].tasks = processTasks;
    const stagesCopy = [...stages];
    stagesCopy[stageIndex] = {
      ...stage,
      processes: processesCopy,
    };

    setStages(stagesCopy);
    unselectAll();
  };

  const handleTaskRemove = (stageId, processId, taskId) => {
    const stage = stages.find((stage) => stage.id === stageId);
    const stageIndex = stages.indexOf(stage);

    const process = stage.processes.find((proc) => proc.id === processId);
    const processIndex = stage.processes.indexOf(process);

    const tasksCopy = process.tasks.filter((task) => task.id !== taskId);

    const stagesCopy = [...stages];
    const processesCopy = [...stage.processes];
    processesCopy[processIndex].tasks = tasksCopy;
    stagesCopy[stageIndex].processes = processesCopy;
    setStages(stagesCopy);
  };

  const handleProcessAdd = (stageId, processId) => {
    const stage = stages.find((stage) => stage.id === stageId);
    const stageIndex = stages.indexOf(stage);

    const processesCopy = [
      ...stage.processes,
      {
        id: randomId(),
        title: "New Process",
        tasks: [{ id: randomId(), title: "New Task" }],
      },
    ];
    const stagesCopy = [...stages];
    stagesCopy[stageIndex].processes = processesCopy;
    setStages(stagesCopy);
    unselectAll();
  };

  const handleProcessRemove = (stageId, processId) => {
    const stage = stages.find((stage) => stage.id === stageId);
    const stageIndex = stages.indexOf(stage);

    const processesCopy = stages[stageIndex].processes.filter(
      (proc) => proc.id !== processId
    );
    const stagesCopy = [...stages];
    stagesCopy[stageIndex].processes = processesCopy;
    setStages(stagesCopy);
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        // width: "900px",
        // height: "900px",
        // border: "2px solid red",
      }}
      onClick={handleWrapperClick}
    >
      <PanZoom
        className="zoomable-area"
        style={{ height: "100%", width: "100%" }}
        disableDoubleClickZoom
        preventPan={() => shiftPress}
      >
        {stages.map((stage, index) => {
          return (
            <>
              {index > 0 && <StageArrow key={`arr_${stage.id}`} />}
              <Stage
                key={stage.id}
                id={stage.id}
                active={stage.active}
                title={stage.title}
                processes={stage.processes}
                onActive={handleStageActive}
                onProcessAdd={handleProcessAdd}
                onProcessRemove={handleProcessRemove}
                onProcessActive={handleProcessActive}
                onAddtask={handleAddTask}
                onTaskRemove={handleTaskRemove}
                onTaskActive={handleTaskActive}
              />
            </>
          );
        })}
      </PanZoom>
    </div>
  );
};

export default Workspace;
