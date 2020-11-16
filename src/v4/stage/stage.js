import React from "react";
import clsx from "clsx";
import "./stage.css";

const Stage = ({ id, title, isSelected, onStageSelect, onStageAdd }) => {
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
          <div className="diag-stage-title">{title}</div>
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
