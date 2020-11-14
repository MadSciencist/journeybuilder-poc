import React, { Fragment } from "react";
import Proc from "../Proc";
import ProcessArrow from "./ProcessArrow";

const Processes = ({
  processes,
  onTaskActive,
  onAddtask,
  onTaskRemove,
  onProcessActive,
}) => {
  const ProcessArrowPair = ({
    id,
    type,
    title,
    outcomes,
    skipArrow,
    ...rest
  }) => {
    if (type === "decision") {
      return (
        <>
          {!skipArrow && <ProcessArrow key={`arr_${id}`} />}
          <div style={{ border: "1px dashed gray", padding: 10 }}>
            <span>
              <i className="fas fa-user la-lg" />
              Condition: {title}
            </span>
            <div
              style={{
                display: "flex",
                marginTop: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {outcomes?.map((outcome) => {
                return (
                  <div style={{ marginLeft: 10 }}>
                    <Proc
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
        </>
      );
    }

    return (
      <>
        {!skipArrow && <ProcessArrow key={`arr_${id}`} />}
        <Proc key={id} title={title} id={id} {...rest} />
      </>
    );
  };

  return (
    <div>
      {processes.map((process, index) => {
        return (
          <Fragment key={process.id}>
            <ProcessArrowPair
              key={process.id}
              id={process.id}
              title={process.title}
              tasks={process.tasks}
              active={process.active}
              type={process.type}
              outcomes={process.outcomes}
              onTaskActive={onTaskActive}
              onAddtask={onAddtask}
              onTaskRemove={onTaskRemove}
              onActive={onProcessActive}
              skipArrow={index === 0}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

export default Processes;
