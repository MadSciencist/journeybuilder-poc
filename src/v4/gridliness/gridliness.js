import React, { useMemo } from "react";
import "./index.css";

// Inspired by https://github.com/wbkd/react-flow

const Gridliness = () => {
  const getSvg = useMemo(() => {
    const createGridLinesPath = (gap, stroke) => {
      return `<path stroke="${stroke}" d="M0 0 V${gap} M0 0 H${gap}" />`;
    };

    const gap = 20;
    const path = createGridLinesPath(gap, "#d9d9d9");

    return encodeURIComponent(
      `<svg width="${gap}" height="${gap}" xmlns='http://www.w3.org/2000/svg'>${path}</svg>`
    );
  }, []);

  return (
    <div
      className="diag-gridliness"
      style={{
        backgroundImage: `url("data:image/svg+xml;utf8,${getSvg}")`,
        backgroundPosition: `${0}px ${0}px`,
      }}
    ></div>
  );
};

export default Gridliness;
