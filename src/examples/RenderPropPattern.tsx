import React from "react";
import HoverState from "../components/HoverState";

const RenderPropPattern: React.FC = () => {
  return (
    <div>
      <h2>Render Prop Pattern</h2>
      <h4>Scenario:</h4>
      <p>
        You need to share logic across multiple components but want to avoid
        using HOCs or duplication. A Render Prop Pattern allows you to pass
        functions as props to control what is rendered.
      </p>
      <h4>Example:</h4>
      <p>
        Create a component that tracks whether the user is hovering over an
        element and uses the Render Prop pattern to render different UIs based
        on the hover state.
      </p>
      <div>
        <HoverState
          renderOver={() => <p>Hovered</p>}
          renderOut={() => <p>Not hovered</p>}
        />
      </div>
    </div>
  );
};
export default RenderPropPattern;
