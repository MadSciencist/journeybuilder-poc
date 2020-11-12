import React, { useState } from "react";
import Task from "../Task";
import { ReactSortable } from "react-sortablejs";
import "./index.css";
import TaskArrow from "./TaskArrow";

const tasks = [
  { id: 123, title: "Capture KYC Data" },
  { id: 123444, title: "Risk Assessment" },
  { id: 1544, title: "Uber Task" },
];

const TaskArrowPair = ({ id, title, skipArrow }) => {
  return (
    <div style={{ display: "flex" }}>
      {!skipArrow && <TaskArrow key={`arr_${id}`} />}
      <Task key={id} id={id} title={title} />
    </div>
  );
};

const Process = ({ id, title }) => {
  const [state, setState] = useState(tasks);
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={(ev) => {
        if (ev.target.className.includes("f-proc")) setActive(!active);
      }}
      className={`f-proc-root  ${active ? "f-proc-root-active" : ""}`}
    >
      <div className="f-proc-inner">
        <div className="f-proc-logo-wrapper">
          <i className="f-proc-logo fas fa-user la-lg" />
          <div className="f-proc-title">{title}</div>
        </div>
        <ReactSortable
          style={{ display: "flex", justifyContent: "center" }}
          list={state}
          filter=".drag-ignore"
          handle=".drag-handle"
          ghostClass="ghost-task"
          setList={(items) => setState(items.filter((x) => x))}
        >
          {state.map((task, indx) => (
            <TaskArrowPair
              key={task.id}
              id={task.id}
              title={task.title}
              skipArrow={indx === 0}
            />
          ))}
        </ReactSortable>
        {active && (
          <>
            <div className="f-proc-left-icons-wrapper">
              <div title="Add previous task" onClick={() => {}}>
                <i className="fas fa-arrow-circle-left fa-2x" />
              </div>
            </div>
            <div className="f-proc-top-icons-wrapper">
              <i
                title="Reorder"
                className="fas fa-bacon la-lg f-task-icon-drag f-task-top-icon drag-handle"
              />
              <i
                title="Properties"
                className="fas fa-cog la-lg f-task-icon-space f-task-top-icon"
              />
              <i
                title="Copy"
                className="fas fa-cut la-lg f-task-icon-space f-task-top-icon"
              />
              <i
                title="Copy"
                className="fas fa-copy la-lg f-task-icon-space f-task-top-icon"
              />
              <i
                title="Remove"
                className="fas fa-trash la-lg f-task-top-icon"
              />
            </div>
            <div className="f-proc-right-icons-wrapper">
              <div title="Add next task" onClick={() => {}}>
                <i className="fas fa-arrow-circle-right fa-2x" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Process;
