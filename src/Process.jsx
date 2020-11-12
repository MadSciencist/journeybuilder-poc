import React from "react";
import Task from "./Task";
import "./Process.css";

const Process = ({
  id,
  title,
  tasks,
  isLast,
  selected,
  onTaskSelected,
  onTaskAdd,
  onTaskRemove,
  onProcessSelected,
  onProcessRemove,
  onAddProcess,
}) => {
  const handleThisClick = (ev) => {
    if (!ev.target.className.includes("process")) {
      return;
    }
    onProcessSelected(id);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        onClick={handleThisClick}
        className={`process task-inside tasks-wrapper ${
          selected ? "task-active" : ""
        }`}
      >
        <span className="process-text">{title}</span>
        {tasks.map((task, idx) => {
          if (task.type === "decision") {
            const decisionTasks = Object.keys(task.outcomes).map(
              (key) => task.outcomes[key]
            );

            return <DecisionSplit decisionTasks={decisionTasks ?? []} />;
          }
          return (
            <>
              {idx > 0 && <span style={{ marginLeft: 5 }}>{"---->"}</span>}
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                onClick={(taskId) => onTaskSelected(id, taskId)}
                onRemoveClick={(taskId) => onTaskRemove(id, taskId)}
                onAddClick={(taskId) => onTaskAdd(id, taskId)}
                selected={task.selected}
                isLast={idx === tasks.length - 1}
              />
              {selected && (
                <div
                  className="remove-wrapper"
                  onClick={() => onProcessRemove(id)}
                >
                  X
                </div>
              )}
              {selected && isLast && (
                <div className="right-arrow-wrapper">
                  <div
                    className="arrow-right"
                    title="Add next task"
                    onClick={() => onAddProcess(id)}
                  />
                  <div
                    className="arrow-right"
                    title="Add gateway"
                    //onClick={() => onAddDecisionClick(id)}
                  />
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

const DecisionSplit = ({ decisionTasks }) => {
  return (
    <div style={{ marginLeft: 35 }}>
      {decisionTasks?.map((task, indx) => {
        return (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            style={indx > 0 ? { marginTop: 20 } : undefined}
          />
        );
      })}
    </div>
  );
};

export default Process;
