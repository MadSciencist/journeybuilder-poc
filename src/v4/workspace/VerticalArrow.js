import React from "react";

const VerticalArrow = () => {
  return (
    <div
      style={{
        width: 60,
        height: 100,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <svg viewBox="0 0 150 200">
        <g transform="translate(100,50) rotate(90)">
          <line
            y2="24.704"
            x1="1.266"
            x2="125.3"
            stroke="#a1a1a1"
            strokeMiterlimit="10"
            y1="24.704"
            strokeWidth="10"
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

export default VerticalArrow;
