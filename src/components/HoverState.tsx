import React, { useState } from "react";

interface IHoverStateProps {
  renderOver: () => JSX.Element;
  renderOut: () => JSX.Element;
}

const HoverState: React.FC<IHoverStateProps> = ({ renderOver, renderOut }) => {
  const [over, setOver] = useState<boolean>(false);

  return (
    <div onMouseEnter={() => setOver(true)} onMouseLeave={() => setOver(false)}>
      {over ? renderOver() : renderOut()}
    </div>
  );
};

export default HoverState;
