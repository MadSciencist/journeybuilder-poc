import React from "react";
import "./index.css";

const Task = ({
  stageId,
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
      className={`f-task-root ${decision && "f-task-decision"} ${
        active && "f-task-root-active"
      }`}
    >
      <div className="f-task-inner">
        <div
          style={{ width: "100%", height: "100%" }}
          onClick={() => onTaskActive(stageId, processId, id)}
        >
          <i className="f-task-logo fas fa-user la-lg" />
          <div className="f-task-title">{title}</div>
        </div>
        {active && (
          <>
            <div className="f-task-left-icons-wrapper">
              <div
                title="Add previous task"
                onClick={() => onAddtask(stageId, processId, id)}
              >
                <i className="fas fa-arrow-circle-left fa-2x" />
              </div>
            </div>
            <div className="f-task-top-icons-wrapper">
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
                onClick={() => onTaskRemove(stageId, processId, id)}
              />
            </div>
            <div className="f-task-right-icons-wrapper">
              <div
                title="Add next task"
                onClick={() => onAddtask(stageId, processId, id)}
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
