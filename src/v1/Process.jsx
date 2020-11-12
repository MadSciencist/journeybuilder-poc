import React from "react";
import Task from "./Task";
import { ReactSortable } from "react-sortablejs";
import "./Process.css";

const Process = ({
  id,
  title,
  tasks,
  isLast,
  active,
  onTaskSelected,
  onTaskAdd,
  onTaskRemove,
  onProcessSelected,
  onProcessRemove,
  onAddProcess,
  sortTasks,
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
          active ? "task-active" : ""
        }`}
      >
        <span className="process-text">{title}</span>

        <ReactSortable
          style={{ display: "flex", justifyContent: "center" }}
          list={tasks}
          //handle=".handle-wrapper"
          setList={(newState, sortable, store) =>
            sortTasks(id, newState, sortable, store)
          }
        >
          {tasks.map((task, idx) => {
            // if (task.type === "decision") {
            //   const decisionTasks = Object.keys(task.outcomes).map(
            //     (key) => task.outcomes[key]
            //   );

            //   return <DecisionSplit decisionTasks={decisionTasks ?? []} />;
            // }
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
                  active={task.active}
                  isLast={idx === tasks.length - 1}
                />
              </>
            );
          })}
        </ReactSortable>
        {active && (
          <div className="remove-wrapper" onClick={() => onProcessRemove(id)}>
            <i className="fas fa-trash la-lg" />
          </div>
        )}
        {active && isLast && (
          <div className="right-icons-wrapper-process">
            <div title="Add next task" onClick={() => onAddProcess(id)}>
              <i className="fas fa-arrow-circle-right fa-3x" />
            </div>
          </div>
        )}
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
