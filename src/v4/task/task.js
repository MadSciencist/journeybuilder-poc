import React from "react";
import "./task.css";

const Task = ({
  processId,
  id,
  isSelected,
  name,
  onAddtask,
  onTaskRemove,
  onTaskActive,
}) => {
  return (
    <div
      className={`diag-task-root ${isSelected && "diag-task-root-selected"}`}
    >
      <div className="diag-task-inner">
        <div
          style={{ width: "100%", height: "100%" }}
          onClick={() => onTaskActive && onTaskActive(processId, id)}
        >
          <i className="diag-task-logo fas fa-user la-lg" />
          <div className="diag-task-title">{name}</div>
        </div>
        {isSelected && (
          <>
            <div className="diag-task-left-icons-wrapper">
              <div
                title="Add previous task"
                onClick={() => onAddtask && onAddtask(processId, id)}
              >
                <i className="fas fa-arrow-circle-left fa-2x" />
              </div>
            </div>
            <div className="diag-task-top-icons-wrapper">
              <i
                title="Reorder"
                className="fas fa-bacon la-lg diag-task-icon-drag diag-task-top-icon drag-handle"
              />
              <i
                title="Properties"
                className="fas fa-cog la-lg diag-task-icon-space diag-task-top-icon"
              />
              <i
                title="Copy"
                className="fas fa-cut la-lg diag-task-icon-space diag-task-top-icon"
              />
              <i
                title="Copy"
                className="fas fa-copy la-lg diag-task-icon-space diag-task-top-icon"
              />
              <i
                title="Remove"
                className="fas fa-trash la-lg diag-task-top-icon"
                onClick={() => onTaskRemove && onTaskRemove(processId, id)}
              />
            </div>
            <div className="diag-task-right-icons-wrapper">
              <div
                title="Add next task"
                onClick={() => onAddtask && onAddtask(processId, id)}
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
