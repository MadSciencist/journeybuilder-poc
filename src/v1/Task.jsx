import React from "react";
import "./Task.css";

const Task = ({
  title,
  id,
  active,
  isLast,
  onClick,
  onAddClick,
  onRemoveClick,
  onAddDecisionClick,
  style,
}) => {
  const handleThisClick = (ev) => {
    onClick(id);
  };

  return (
    <div style={style} className={`task ${active ? "task-active" : ""}`}>
      <div className="task-inside">
        <div
          style={{ width: "100%", height: "100%" }}
          onClick={handleThisClick}
        >
          <span className="task-text">{title}</span>
        </div>
        {/* {active && (
          <div className="handle-wrapper" onClick={() => onRemoveClick(id)}>
            <i className="fas fa-expand-arrows-alt la-lg" />
          </div>
        )} */}
        {active && (
          <div className="remove-wrapper" onClick={() => onRemoveClick(id)}>
            <i className="fas fa-trash la-lg" />
          </div>
        )}
        {active && isLast && (
          <div className="right-icons-wrapper">
            <div title="Add next task" onClick={() => onAddClick(id)}>
              <i className="fas fa-arrow-circle-right fa-2x" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Task;
