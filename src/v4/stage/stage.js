import React, { Fragment } from "react";
import clsx from "clsx";
import Process from "../process";
import "./stage.css";

const Stage = ({
  id,
  name,
  isSelected,
  onStageSelect,
  onStageAdd,
  processes,
}) => {
  const handleSelect = (ev) => {
    ev.preventDefault();
    if (typeof onStageSelect === "function") onStageSelect(id);
  };

  const handleAdd = (ev) => {
    ev.preventDefault();
    if (typeof onStageAdd === "function") onStageAdd(id);
  };

  return (
    <div
      className={clsx(
        "diag-stage-root",
        isSelected && "diag-stage-root-selected"
      )}
    >
      <div className="diag-stage-inner">
        <div onClick={handleSelect}>
          <div className="diag-stage-title">{name}</div>
        </div>
        <div className="diag-stage-processes">
          {processes?.map((process, index) => (
            <Fragment key={process.id}>
              {index > 0 && (
                <div key={`arr_${process.id}`} style={{ marginLeft: 20 }}></div>
              )}
              <Process
                key={process.id}
                id={process.id}
                name={process.name}
                tasks={process.tasks}
              />
            </Fragment>
          ))}
        </div>
        {isSelected && (
          <div
            className="diag-stage-bottom-icons-wrapper"
            title="Add Stage After"
            onClick={handleAdd}
          >
            <i className="fas fa-arrow-circle-down fa-2x" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Stage;
