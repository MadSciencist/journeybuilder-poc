import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Appv1 from "./v1/App";
import reportWebVitals from "./reportWebVitals";

const Root = () => {
  const [version, setVersion] = useState(null);

  if (version === null) {
    return (
      <>
        <button onClick={() => setVersion(1)}>Version 1</button>
        <button onClick={() => setVersion(2)}>Version 2</button>
      </>
    );
  } else if (version === 1) {
    return <Appv1 />;
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
