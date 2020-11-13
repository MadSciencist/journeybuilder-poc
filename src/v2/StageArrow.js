import React from "react";

const StageArrow = () => {
  return (
    <div
      className="drag-ignore"
      style={{
        width: 60,
        height: 100,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <svg viewBox="0 0 160 200">
        <g transform="translate(100,50) rotate(90)">
          <line
            y2="24.704"
            x1="1.266"
            x2="125.3"
            stroke="#000000"
            strokeMiterlimit="10"
            y1="24.704"
            strokeWidth="18"
          />
          <polygon points="124.4 6.284 124.4 44.606 148.35 23.69" />
        </g>
      </svg>
    </div>
  );
};

export default StageArrow;
