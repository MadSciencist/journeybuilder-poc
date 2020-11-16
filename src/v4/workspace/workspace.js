import React, { useState, Fragment } from "react";
import { PanZoom } from "react-easy-panzoom";
import useKeyPress from "../../useKeyPress";
import VerticalArrow from "./VerticalArrow";
import Stage from "../stage";
import "./index.css";
import { data } from "../data";

const randomId = () => Math.random().toString(36).substring(7);

const Workspace = () => {
  const shiftPress = useKeyPress("Control");
  const [stages, setStages] = useState(data);

  const handleWrapperClick = (ev) => {
    ev?.preventDefault();
    if (ev.target.className?.includes("diag-zoomable-area")) {
      unselectAll();
    }
  };

  const handleStageSelect = (stageId) => {
    const selectedStage = stages.find((s) => s.id === stageId);
    const selectedStageIndex = stages.indexOf(selectedStage);
    const stagesCopy = [...stages];
    stagesCopy[selectedStageIndex] = {
      ...selectedStage,
      isSelected: !selectedStage.isSelected,
    };
    setStages(stagesCopy);
  };

  const unselectAll = () => {
    setStages((stateStages) =>
      stateStages.map((stage) => ({
        ...stage,
        isSelected: false,
      }))
    );
  };

  const handleStageAdd = (stageId) => {
    const stagesCopy = [...stages, { id: randomId(), title: "New Stage" }];
    setStages(stagesCopy);
    unselectAll();
  };

  return (
    <div
      onClick={handleWrapperClick}
      style={{ width: "100%", height: "100vh", backgroundColor: "#9ef7f3" }}
    >
      <PanZoom
        className="diag-zoomable-area"
        style={{ height: "100%", width: "100%" }}
        disableDoubleClickZoom
        noStateUpdate
        autoCenter
        preventPan={() => shiftPress}
      >
        {stages?.map((stage, index) => {
          return (
            <Fragment key={stage.id}>
              {index > 0 && <VerticalArrow key={`arr_${stage.id}`} />}
              <Stage
                key={stage.id}
                id={stage.id}
                title={stage.title}
                isSelected={stage.isSelected}
                onStageSelect={handleStageSelect}
                onStageAdd={handleStageAdd}
              />
            </Fragment>
          );
        })}
      </PanZoom>
    </div>
  );
};

export default Workspace;
