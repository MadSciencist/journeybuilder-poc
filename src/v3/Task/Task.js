import React from "react";
import "./index.css";

const Task = ({
  processId,
  id,
  decision,
  active,
  title,
  onAddtask,
  onTaskRemove,
  onTaskActive,
}) => {
  return (
    <div
      className={`f3-task-root ${decision && "f3-task-decision"} ${
        active && "f3-task-root-active"
      }`}
    >
      <div className="f3-task-inner">
        <div
          style={{ width: "100%", height: "100%" }}
          onClick={() => onTaskActive(processId, id)}
        >
          <i className="f3-task-logo fas fa-user la-lg" />
          <div className="f3-task-title">{title}</div>
        </div>
        {active && (
          <>
            <div className="f3-task-left-icons-wrapper">
              <div
                title="Add previous task"
                onClick={() => onAddtask(processId, id)}
              >
                <i className="fas fa-arrow-circle-left fa-2x" />
              </div>
            </div>
            <div className="f3-task-top-icons-wrapper">
              <i
                title="Reorder"
                className="fas fa-bacon la-lg f3-task-icon-drag f3-task-top-icon drag-handle"
              />
              <i
                title="Properties"
                className="fas fa-cog la-lg f3-task-icon-space f3-task-top-icon"
              />
              <i
                title="Copy"
                className="fas fa-cut la-lg f3-task-icon-space f3-task-top-icon"
              />
              <i
                title="Copy"
                className="fas fa-copy la-lg f3-task-icon-space f3-task-top-icon"
              />
              <i
                title="Remove"
                className="fas fa-trash la-lg f3-task-top-icon"
                onClick={() => onTaskRemove(processId, id)}
              />
            </div>
            <div className="f3-task-right-icons-wrapper">
              <div
                title="Add next task"
                onClick={() => onAddtask(processId, id)}
              >
                <i className="fas fa-arrow-circle-right fa-2x" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Task;
