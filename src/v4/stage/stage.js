import React from "react";
import clsx from "clsx";
import "./stage.css";

const Stage = ({ id, title, isSelected, onStageSelect }) => {
  return (
    <div
      className={clsx(
        "diag-stage-root",
        isSelected && "diag-stage-root-selected"
      )}
    >
      <div className="diag-stage-inner">
        <div onClick={(e) => onStageSelect && onStageSelect(e, id)}>
          <div className="diag-stage-title">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default Stage;
