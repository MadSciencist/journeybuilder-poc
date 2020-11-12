import React from "react";
import { PanZoom } from "react-easy-panzoom";
import { useKeyPress } from "../useKeyPress";
import Process from "./Process";

const Workspace = () => {
  const shiftPress = useKeyPress("Control");

  return (
    <PanZoom disableDoubleClickZoom preventPan={() => shiftPress}>
      <div
        style={{
          width: "100%",
          height: "100vh",
          marginTop: "5rem",
          marginLeft: "5rem",
        }}
      >
        <Process title={"Capture Data"} />
      </div>
    </PanZoom>
  );
};

export default Workspace;
