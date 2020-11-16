import React from "react";
import { PanZoom } from "react-easy-panzoom";
import useKeyPress from "../../useKeyPress";
import "./index.css";
import StagesRenderer from "../StagesRenderer/stagesRenderer";
import { data } from "../data";

const Workspace = () => {
  const shiftPress = useKeyPress("Control");

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <PanZoom
        className="diag-zoomable-area"
        style={{ height: "100%", width: "100%" }}
        disableDoubleClickZoom
        noStateUpdate
        preventPan={() => shiftPress}
      >
        <StagesRenderer stages={data} />
      </PanZoom>
    </div>
  );
};

export default Workspace;
