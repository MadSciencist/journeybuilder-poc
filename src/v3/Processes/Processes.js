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
  return (
    <div>
      {processes.map((process, index) => {
        return (
          <Fragment key={process.id}>
            {index > 0 && <ProcessArrow key={`arr_${process.id}`} />}
            <Proc
              key={process.id}
              id={process.id}
              title={process.title}
              tasks={process.tasks}
              active={process.active}
              onTaskActive={onTaskActive}
              onAddtask={onAddtask}
              onTaskRemove={onTaskRemove}
              onActive={onProcessActive}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

export default Processes;
