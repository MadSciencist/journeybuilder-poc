import React from "react";

const TaskArrow = () => {
  return (
    <div
      className="drag-ignore"
      style={{
        width: 60,
        paddingLeft: 5,
        paddingRight: 5,
        alignSelf: "center",
      }}
    >
      <svg viewBox="0 0 160 200">
        <g transform="translate(0,60)">
          <line
            y2="24.704"
            x1="1.266"
            x2="125.3"
            stroke="#a1a1a1"
            strokeMiterlimit="10"
            y1="24.704"
            strokeWidth="6"
          />
          <polygon
            fill="#a1a1a1"
            points="124.4 6.284 124.4 44.606 148.35 23.69"
          />
        </g>
      </svg>
    </div>
  );
};

export default TaskArrow;
