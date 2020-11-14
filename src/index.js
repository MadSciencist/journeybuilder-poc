import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Appv1 from "./v1/App";
import reportWebVitals from "./reportWebVitals";
import Workspace from "./v2/Workspace";
import V3 from "./v3/v3";

const Root = () => {
  const [version, setVersion] = useState(10);

  if (version === null) {
    return (
      <>
        <button onClick={() => setVersion(1)}>Version 1</button>
        <button onClick={() => setVersion(2)}>Version 2</button>
        <button onClick={() => setVersion(3)}>Version 3</button>
        <button onClick={() => setVersion(4)}>Version 4</button>
        <button onClick={() => setVersion(5)}>Version 5</button>
        <button onClick={() => setVersion(10)}>Draggable stages</button>
      </>
    );
  } else if (version === 1) {
    return <Appv1 />;
  } else if (version === 10) {
    return <V3 />;
  } else {
    return <Workspace dataSet={version - 1} />;
  }
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
