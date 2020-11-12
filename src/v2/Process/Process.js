import React, { useState } from "react";
import Task from "../Task";
import { ReactSortable } from "react-sortablejs";
import "./index.css";
import TaskArrow from "./TaskArrow";

const tasks = [
  { id: 123, title: "Capture KYC Data" },
  { id: 123444, title: "Risk Assessment" },
  { id: 1544, title: "Uber Task" },
];

const TaskArrowPair = ({ id, title, skipArrow }) => {
  return (
    <div style={{ display: "flex" }}>
      {!skipArrow && <TaskArrow key={`arr_${id}`} />}
      <Task key={id} id={id} title={title} />
    </div>
  );
};

const Process = () => {
  const [state, setState] = useState(tasks);

  return (
    <div style={{ display: "flex" }}>
      <ReactSortable
        style={{ display: "flex", justifyContent: "center" }}
        list={state}
        filter=".drag-ignore"
        handle=".drag-handle"
        ghostClass="ghost"
        setList={(items) => setState(items.filter((x) => x))}
      >
        {state.map((task, indx) => (
          <TaskArrowPair
            key={task.id}
            id={task.id}
            title={task.title}
            skipArrow={indx === 0}
          />
        ))}
      </ReactSortable>
    </div>
  );
};

export default Process;
