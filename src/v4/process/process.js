import React, { Fragment } from "react";
import clsx from "clsx";
import Task from "../task";
import "./index.css";

const Process = ({
  id,
  stageId,
  name,
  tasks,
  isSelected,
  onProcessSelect,
  onProcessAdd,
  onProcessRemove,
}) => {
  const handleSelect = (ev) => {
    ev.preventDefault();
    if (typeof onStageSelect === "function") onProcessSelect(id);
  };

  const handleAdd = (ev) => {
    ev.preventDefault();
    if (typeof onStageAdd === "function") onProcessAdd(id);
  };

  return (
    <div
      // onClick={(ev) => {
      //   if (ev.target.className.includes("diag-proc"))
      //     handleSelect(stageId, id);
      // }}
      className={clsx("diag-proc-root", isSelected && "diag-proc-root-active")}
    >
      <div className="diag-proc-inner">
        <div className="diag-proc-title">{name}</div>
        <div className="diag-proc-tasks">
          {tasks.map((task, index) => (
            <Fragment key={task.id}>
              {index > 0 && (
                <div key={`arr_${task.id}`} style={{ marginLeft: 20 }}></div>
              )}
              <Task
                key={task.id}
                id={task.id}
                processId={id}
                stageId={stageId}
                name={task.name}
              />
            </Fragment>
          ))}
        </div>

        {/* {active && (
          <>
            <div className="f-proc-left-icons-wrapper">
              <div
                title="Add previous task"
                onClick={() => onProcessAdd(stageId, id)}
              >
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
                onClick={() => onProcessRemove(stageId, id)}
              />
            </div>
            <div className="f-proc-right-icons-wrapper">
              <div
                title="Add next task"
                onClick={() => onProcessAdd(stageId, id)}
              >
                <i className="fas fa-arrow-circle-right fa-2x" />
              </div>
            </div>
          </>
        )} */}
      </div>
    </div>
  );
};

export default Process;
