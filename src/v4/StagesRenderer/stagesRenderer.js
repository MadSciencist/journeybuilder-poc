import React, { useState } from "react";
import Stage from "../stage";
import VerticalArrow from "./VerticalArrow";

const StagesRenderer = ({ stages }) => {
  const [isSelected, setActive] = useState(false);
  return (
    <>
      {stages?.map((stage, index) => {
        return (
          <>
            {index > 0 && <VerticalArrow />}
            <Stage
              key={stage.id}
              id={stage.id}
              title={stage.title}
              isSelected={isSelected}
              onStageSelect={() => setActive(!isSelected)}
            />
          </>
        );
      })}
    </>
  );
};

export default StagesRenderer;
