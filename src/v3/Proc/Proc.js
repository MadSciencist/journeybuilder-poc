import React from "react";
import TaskArrow from "./TaskArrow";
import { ReactSortable } from "react-sortablejs";
import "./index.css";
import Task from "../Task";

const TaskArrowPair = ({ id, type, outcomes, skipArrow, ...rest }) => {
  if (type === "decision") {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        {!skipArrow && <TaskArrow key={`arr_${id}`} />}
        <Task decision key={id} id={id} {...rest} />
        <div style={{ marginLeft: 50 }}>
          {outcomes?.map((outcome) => {
            return (
              <div key={outcome.id} style={{ marginBottom: 15 }}>
                <Task
                  {...rest}
                  key={outcome.id}
                  tasks={outcome.tasks}
                  title={outcome.title}
                  id={outcome.id}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex" }}>
      {!skipArrow && <TaskArrow key={`arr_${id}`} />}
      <Task key={id} id={id} {...rest} />
    </div>
  );
};

const Proc = ({
  id,
  title,
  tasks,
  active,
  onActive,
  onAddtask,
  onTaskRemove,
  onTaskActive,
}) => {
  return (
    <div
      onClick={(ev) => {
        if (ev.target?.className?.includes("f3-proc")) {
          onActive(id);
        }
      }}
      className={`f3-proc-root  ${active ? "f3-proc-root-active" : ""}`}
    >
      <div className="f3-proc-inner">
        <div className="f3-proc-logo-wrapper">
          <i className="f3-proc-logo fas fa-user la-lg" />
          <div className="f3-proc-title">{title}</div>
        </div>
        <ReactSortable
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          list={tasks}
          filter=".drag-ignore"
          handle=".drag-handle"
          setList={() => {}}
        >
          {tasks.map((task, indx) => (
            <TaskArrowPair
              key={task.id}
              processId={id}
              id={task.id}
              title={task.title}
              active={task.active}
              type={task.type}
              outcomes={task.outcomes}
              onAddtask={onAddtask}
              onTaskRemove={onTaskRemove}
              onTaskActive={onTaskActive}
              skipArrow={indx === 0}
            />
          ))}
        </ReactSortable>
      </div>
    </div>
  );
};

export default Proc;
