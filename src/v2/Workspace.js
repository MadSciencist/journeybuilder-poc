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
          {
            id: 534,
            type: "decision",
            title: "Decision",
            outcomes: [
              { id: 55666, title: "Outcome 1" },
              { id: 5566654, title: "Outcome 2" },
              { id: 6654, title: "Outcome 3" },
            ],
          },
          { id: 663, title: "End Journey" },
        ],
      },
    ],
  },
  {
    id: "Customer Checks",
    title: "Customer Checks",
    processes: [
      {
        id: "Screening",
        title: "Screening",
        tasks: [
          {
            id: "Send for Screening",
            title: "Send for Screening",
          },
          {
            id: "Material Hits Present",
            type: "decision",
            title: "Material Hits Present",
            outcomes: [
              { id: 556266, title: "[Yes] Escalate & End Journey" },
              { id: 231212, title: "[Else]" },
            ],
          },
          {
            id: "Screening Complete",
            title: "Screening Complete",
          },
        ],
      },
      {
        id: "Risk",
        title: "Risk",
        tasks: [
          {
            id: "R12isk Assessment",
            title: "Risk Assessment",
          },
          {
            id: "12High Risk",
            type: "decision",
            title: "High Risk",
            outcomes: [
              { id: 5533666, title: "[Yes] Escalate & End Journey" },
              { id: 2351112, title: "[Else]" },
            ],
          },
          {
            id: "Radomplete Request",
            title: "Complete Request",
          },
        ],
      },
    ],
  },
  {
    id: "Final Review",
    title: "Final Review",
    processes: [
      {
        id: "Reviews",
        title: "Reviews",
        tasks: [
          { id: 123, title: "Onboarding Review" },
          {
            id: 123444,
            title: "Additional Escalation Triggers",
            type: "decision",
            outcomes: [
              { id: 55666, title: "[Yes] Compliance Review" },
              { id: 556661, title: "[Else] Compliance Review" },
            ],
          },
          { id: "8975653", title: "Downstream Integration" },
          { id: "322", title: "Complete Journey" },
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
            <React.Fragment key={stage.id}>
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
            </React.Fragment>
          );
        })}
      </PanZoom>
    </div>
  );
};

export default Workspace;
