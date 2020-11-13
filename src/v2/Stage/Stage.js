import React from "react";
import ProcessArrow from "./ProcessArrow";
import Process from "../Process";
import { ReactSortable } from "react-sortablejs";
import "./index.css";

const ProcessArrowPair = ({ id, type, outcomes, skipArrow, ...rest }) => {
  if (type === "decision") {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        {!skipArrow && <ProcessArrow key={`arr_${id}`} />}
        <Process decision key={id} id={id} {...rest} />
        <div style={{ marginLeft: 50 }}>
          {outcomes?.map((outcome) => {
            return (
              <div key={outcome.id} style={{ marginBottom: 15 }}>
                <Process
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
      {!skipArrow && <ProcessArrow key={`arr_${id}`} />}
      <Process key={id} id={id} {...rest} />
    </div>
  );
};

const Stage = ({
  id,
  title,
  processes,
  active,
  onActive,
  onAddtask,
  onTaskRemove,
  onTaskActive,
  onProcessAdd,
  onProcessRemove,
  onProcessActive,
}) => {
  return (
    <div
      onClick={(ev) => {
        if (ev.target?.className?.includes("f-stage")) onActive(id);
      }}
      className={`f-stage-root  ${active ? "f-stage-root-active" : ""}`}
    >
      <div className="f-stage-inner">
        <div className="f-stage-logo-wrapper">
          <i className="f-stage-logo fas fa-user la-lg" />
          <div className="f-stage-title">{title}</div>
        </div>
        <ReactSortable
          style={{ display: "flex", justifyContent: "center" }}
          list={processes}
          filter=".drag-ignore"
          handle=".drag-handle"
          setList={() => {}}
        >
          {processes.map((process, indx) => (
            <ProcessArrowPair
              key={process.id}
              stageId={id}
              id={process.id}
              title={process.title}
              active={process.active}
              type={process.type}
              outcomes={process.outcomes}
              onProcessAdd={onProcessAdd}
              onProcessRemove={onProcessRemove}
              onProcessActive={onProcessActive}
              tasks={process.tasks}
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

export default Stage;
