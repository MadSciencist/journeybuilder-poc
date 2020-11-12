import React from "react";
import "./Task.css";

const Task = ({
  title,
  id,
  selected,
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
    <div style={style} className={`task ${selected ? "task-active" : ""}`}>
      <div className="task-inside">
        <div
          style={{ width: "100%", height: "100%" }}
          onClick={handleThisClick}
        >
          <span className="task-text">{title}</span>
        </div>
        {selected && (
          <div className="remove-wrapper" onClick={() => onRemoveClick(id)}>
            X
          </div>
        )}
        {selected && isLast && (
          <div className="right-arrow-wrapper">
            <div
              className="arrow-right"
              title="Add next task"
              onClick={() => onAddClick(id)}
            />
            <div
              className="arrow-right"
              title="Add gateway"
              onClick={() => onAddDecisionClick(id)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Task;
