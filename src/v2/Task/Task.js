import React, { useState } from "react";
import "./index.css";

const Task = ({ id, title, onRemoveClick, onAddClick }) => {
  const [active, setActive] = useState(false);

  return (
    <div className={`f-task-root ${active && "f-task-root-active"}`}>
      <div className="f-task-inner">
        <div
          style={{ width: "100%", height: "100%" }}
          onClick={() => setActive(!active)}
        >
          <i className="f-task-logo fas fa-user la-lg" />
          <div className="f-task-title">{title}</div>
        </div>
        {active && (
          <>
            <div className="f-task-left-icons-wrapper">
              <div title="Add previous task" onClick={() => onAddClick(id)}>
                <i className="fas fa-arrow-circle-left fa-2x" />
              </div>
            </div>
            <div className="f-task-top-icons-wrapper">
              <i
                title="Reorder"
                className="fas fa-grip-lines-vertical la-lg f-task-icon-drag f-task-top-icon drag-handle"
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
            <div className="f-task-right-icons-wrapper">
              <div title="Add next task" onClick={() => onAddClick(id)}>
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
