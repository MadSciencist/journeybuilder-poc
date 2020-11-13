import React from "react";

const ProcessArrow = () => {
  return (
    <div
      className="drag-ignore"
      style={{
        width: 60,
        paddingLeft: 10,
        paddingRight: 10,
        alignSelf: "center",
      }}
    >
      <svg viewBox="0 0 160 200">
        <g transform="translate(0,50)">
          <line
            y2="24.704"
            x1="1.266"
            x2="125.3"
            stroke="#000000"
            strokeMiterlimit="10"
            y1="24.704"
            strokeWidth="12"
          />
          <polygon points="124.4 6.284 124.4 44.606 148.35 23.69" />
        </g>
      </svg>
    </div>
  );
};

export default ProcessArrow;
