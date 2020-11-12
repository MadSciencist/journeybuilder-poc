import React from "react";
import Workspace from "./Workspace";
import { PanZoom } from "react-easy-panzoom";

function App() {
  return (
    <PanZoom>
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
    </PanZoom>
  );
}

export default App;
