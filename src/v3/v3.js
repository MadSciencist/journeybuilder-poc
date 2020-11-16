import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Processes from "./Processes/Processes";
import { PanZoom } from "react-easy-panzoom";
import useKeyPress from "../useKeyPress";
import "./v3.css";
const randomId = () => Math.random().toString(36).substring(7);

const tabs = [
  "New Request",
  "Capture Client Data",
  "Customer Checks",
  "Final Review",
];

const initialProcesses = [
  {
    id: "Initiate Case",
    title: "Initiate Case",
    tasks: [
      {
        id: "Capture Client Data",
        title: "Capture Client Data",
      },
      {
        id: "Sanctions Check",
        title: "Sanctions Check",
      },
    ],
  },
  {
    id: "Risk Assessment process",
    title: "Risk Assessment",
    tasks: [
      {
        id: "3R12isk Assessment",
        title: "Risk Assessment",
      },
    ],
  },
  {
    id: "Evaluate Risk",
    title: "Evaluate Risk",
    type: "decision",
    tasks: [],
    outcomes: [
      {
        id: "When High Risk",
        title: "When High Risk",
        tasks: [
          {
            id: "Review",
            type: "decision",
            title: "Review",
            outcomes: [{ id: 5533666, title: "When yes:  End Journey" }],
          },
        ],
      },
      {
        id: "Else",
        title: "Else",
        tasks: [
          {
            id: "Review",
            title: "Do something",
          },
        ],
      },
    ],
  },
  {
    id: "Evaluate Sanctions",
    title: "Evaluate Sanctions",
    type: "decision",
    tasks: [],
    outcomes: [
      {
        id: "Match",
        title: "When Match",
        tasks: [
          {
            id: "Review",
            type: "decision",
            title: "Review",
            outcomes: [
              { id: 5533666, title: "When yes:  End Journey" },
              { id: 5533666, title: "Else:  Send email" },
            ],
          },
        ],
      },
      {
        id: "Match",
        title: "Else",
        tasks: [
          {
            id: "Review",
            title: "Review",
          },
        ],
      },
    ],
  },
];

const V3 = () => {
  const shiftPress = useKeyPress("Control");
  const [activeTab, setActiveTab] = useState("New Request");
  const [processes, setProcesses] = useState(initialProcesses);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const handleTaskActive = (processId, taskId) => {
    const process = processes.find((proc) => proc.id === processId);
    const processIndex = processes.indexOf(process);

    const task = process.tasks.find((task) => task.id === taskId);
    const taskIndex = process.tasks.indexOf(task);

    const tasksCopy = [...process.tasks];
    tasksCopy[taskIndex] = {
      ...task,
      active: !task.active,
    };

    const processesCopy = [...processes];
    processesCopy[processIndex] = {
      ...process,
      tasks: tasksCopy,
    };

    setProcesses(processesCopy);
  };

  const handleProcessActive = (processId) => {
    const process = processes.find((proc) => proc.id === processId);
    const processIndex = processes.indexOf(process);
    const processesCopy = [...processes];
    processesCopy[processIndex] = {
      ...process,
      active: !process.active,
    };
    setProcesses(processesCopy);
  };

  const handleTaskAdd = (processId) => {
    const process = processes.find((proc) => proc.id === processId);
    const processIndex = processes.indexOf(process);
    const processTasks = [
      ...process.tasks,
      { id: randomId(), title: "New Task" },
    ];
    const processesCopy = [...processes];
    processesCopy[processIndex].tasks = processTasks;

    setProcesses(processesCopy);
    unselectAll();
  };

  const handleTaskRemove = (processId, taskId) => {
    const process = processes.find((proc) => proc.id === processId);
    const processIndex = processes.indexOf(process);
    const tasksCopy = process.tasks.filter((task) => task.id !== taskId);
    const processesCopy = [...processes];
    processesCopy[processIndex].tasks = tasksCopy;

    setProcesses(processesCopy);
  };

  const unselectAll = () => {
    const processesCop = processes.map((proc) => {
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
    });
    setProcesses(processesCop);
  };

  const handleWrapperClick = (ev) => {
    ev?.preventDefault();
    if (ev.target.className?.includes("zoomable-area")) {
      unselectAll();
    }
  };

  return (
    <div>
      <Nav tabs>
        {tabs.map((tab) => {
          return (
            <NavItem key={tab}>
              <NavLink key={tab} onClick={() => toggle(tab)}>
                {tab}
              </NavLink>
            </NavItem>
          );
        })}
      </Nav>
      <TabContent activeTab={activeTab} style={{ margin: "2rem" }}>
        <TabPane tabId="New Request">
          <Row style={{ height: "100vh" }} onClick={handleWrapperClick}>
            <PanZoom
              className="zoomable-area"
              style={{ height: "100%", width: "100%" }}
              disableDoubleClickZoom
              enableBoundingBox
              boundaryRatioVertical={0.8}
              boundaryRatioHorizontal={0.8}
              autoCenter
              noStateUpdate
              preventPan={() => shiftPress}
            >
              <Processes
                processes={processes}
                onTaskActive={handleTaskActive}
                onAddtask={handleTaskAdd}
                onTaskRemove={handleTaskRemove}
                onProcessActive={handleProcessActive}
              />
            </PanZoom>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default V3;
