import React from "react";
import Task from "../Task";
import { ReactSortable } from "react-sortablejs";
import "./index.css";
import TaskArrow from "./TaskArrow";

const TaskArrowPair = ({
  stageId,
  processId,
  id,
  type,
  outcomes,
  skipArrow,
  ...rest
}) => {
  if (type === "decision") {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        {!skipArrow && <TaskArrow key={`arr_${id}`} />}
        <Task
          decision
          key={id}
          stageId={stageId}
          processId={processId}
          id={id}
          {...rest}
        />
        <div style={{ marginLeft: 50 }}>
          {outcomes?.map((outcome) => {
            return (
              <div key={outcome.id} style={{ marginBottom: 15 }}>
                <Task
                  {...rest}
                  key={outcome.id}
                  title={outcome.title}
                  stageId={stageId}
                  processId={processId}
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
      <Task
        key={id}
        stageId={stageId}
        processId={processId}
        id={id}
        {...rest}
      />
    </div>
  );
};

const Process = ({
  stageId,
  id,
  title,
  active,
  tasks,
  decision,
  onProcessActive,
  onAddtask,
  onTaskRemove,
  onTaskActive,
  onProcessAdd,
  onProcessRemove,
}) => {
  return (
    <div
      onClick={(ev) => {
        if (ev.target.className.includes("f-proc"))
          onProcessActive(stageId, id);
      }}
      className={`f-proc-root ${decision ? "f-proc-root-decision" : ""} ${
        active ? "f-proc-root-active" : ""
      }`}
    >
      <div className="f-proc-inner">
        <div className="f-proc-logo-wrapper">
          <i className="f-proc-logo fas fa-user la-lg" />
          <div className="f-proc-title">{title}</div>
        </div>
        {/* justifyContent: "center" */}
        <ReactSortable
          style={{ display: "flex", alignItems: "center" }}
          list={tasks}
          filter=".drag-ignore"
          handle=".drag-handle"
          ghostClass="ghost-task"
          setList={() => {}}
        >
          {tasks.map((task, indx) => (
            <TaskArrowPair
              key={task.id}
              id={task.id}
              active={task.active}
              stageId={stageId}
              outcomes={task.outcomes}
              processId={id}
              title={task.title}
              type={task.type}
              onAddtask={onAddtask}
              onTaskRemove={onTaskRemove}
              onTaskActive={onTaskActive}
              skipArrow={indx === 0}
            />
          ))}
        </ReactSortable>
        {active && (
          <>
            <div className="f-proc-left-icons-wrapper">
              <div
                title="Add previous task"
                onClick={() => onProcessAdd(stageId, id)}
              >
                <i className="fas fa-arrow-circle-left fa-2x" />
              </div>
            </div>
            <div className="f-proc-top-icons-wrapper">
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
                onClick={() => onProcessRemove(stageId, id)}
              />
            </div>
            <div className="f-proc-right-icons-wrapper">
              <div
                title="Add next task"
                onClick={() => onProcessAdd(stageId, id)}
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

export default Process;
