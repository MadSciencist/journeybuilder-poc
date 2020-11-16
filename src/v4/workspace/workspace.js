import React, { useState, Fragment } from "react";
import { PanZoom } from "react-easy-panzoom";
import useKeyPress from "../../useKeyPress";
import VerticalArrow from "./VerticalArrow";
import Stage from "../stage";
import "./index.css";
import { data, commercialOnbData } from "../data";
import Gridliness from "../gridliness/gridliness";

const randomId = () => Math.random().toString(36).substring(7);

const Workspace = () => {
  const shiftPress = useKeyPress("Control");
  const [stages, setStages] = useState(commercialOnbData);

  const handleWrapperClick = (ev) => {
    ev?.preventDefault();

    const { className } = ev.target;
    if (
      typeof className === "string" &&
      className.includes("diag-gridliness")
    ) {
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
      style={{ width: "100%", height: "100vh" }}
    >
      <Gridliness />
      <PanZoom
        className="diag-zoomable-area"
        style={{ height: "100%", width: "100%" }}
        disableDoubleClickZoom
        noStateUpdate
        autoCenter
        preventPan={() => shiftPress}
      >
        {stages?.map((stage, index) => (
          <Fragment key={stage.id}>
            {index > 0 && <VerticalArrow key={`arr_${stage.id}`} />}
            <Stage
              key={stage.id}
              id={stage.id}
              name={stage.name}
              isSelected={stage.isSelected}
              processes={stage.processes}
              onStageSelect={handleStageSelect}
              onStageAdd={handleStageAdd}
            />
          </Fragment>
        ))}
      </PanZoom>
    </div>
  );
};

export default Workspace;
