import React from "react";
import TaskArrow from "./TaskArrow";
import { ReactSortable } from "react-sortablejs";
import "./index.css";
import Task from "../Task";

const TaskArrowPair = ({ id, type, title, outcomes, skipArrow, ...rest }) => {
  if (type === "decision") {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {!skipArrow && <TaskArrow key={`arr_${id}`} />}
        {/* <Task decision key={id} id={id} {...rest} /> */}
        <span>Condition: {title}</span>
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
    <div style={{ display: "flex", alignItems: "center" }}>
      {!skipArrow && <TaskArrow key={`arr_${id}`} />}
      <Task key={id} title={title} id={id} {...rest} />
    </div>
  );
};

const Proc = ({
  id,
  title,
  tasks,
  active,
  decision,
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
      className={`f3-proc-root  ${decision && "f3-proc-decision"} ${
        active ? "f3-proc-root-active" : ""
      }`}
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
          ghostClass="ghost-task"
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
