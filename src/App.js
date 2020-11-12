import "./App.css";
import Workspace from "./Workspace";
import { PanZoom } from "react-easy-panzoom";

function App() {
  return (
    <PanZoom>
      <Workspace />
    </PanZoom>
  );
}

export default App;
