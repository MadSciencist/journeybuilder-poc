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
}) => {
  return (
    <div className={`task ${selected ? "task-active" : ""}`}>
      <div className="task-inside">
        <div
          style={{ width: "100%", height: "100%" }}
          onClick={() => onClick(id)}
        >
          <span className="task-text">{title}</span>
        </div>
        {selected && (
          <div className="remove-wrapper" onClick={() => onRemoveClick(id)}>
            X
          </div>
        )}
        {selected && isLast && (
          <div className="right-arrow-wrapper" onClick={() => onAddClick(id)}>
            <div className="arrow-right" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Task;
