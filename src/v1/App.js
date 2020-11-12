import React from "react";
import Workspace from "./Workspace";
import { PanZoom } from "react-easy-panzoom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useKeyPress } from "../useKeyPress";

function App() {
  const shiftPress = useKeyPress("Shift");

  return (
    <>
      <PanZoom preventPan={() => !shiftPress}>
        {/* <TransformWrapper
        style={{ width: "100%" }}
        wheel={{ wheelEnabled: true }}
        pan={{ disabled: !shiftPress }}
      >
        <TransformComponent> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
          }}
        >
          <div style={{ position: "relative" }}>
            <Workspace title={"First stage"} />
          </div>
          <div style={{ position: "relative", marginTop: 50 }}>
            <Workspace title={"Second stage"} />
          </div>
          <div style={{ position: "relative", marginTop: 50 }}>
            <Workspace title={"Third stage"} />
          </div>
        </div>
        {/* </TransformComponent>
     </TransformWrapper> */}
      </PanZoom>
    </>
  );
}

export default App;
