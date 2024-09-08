import React from "react";
import Button from "../components/Button";

const ReuasableButton: React.FC = () => {
  return (
    <div>
      <h2>TypeScript in React: Typing Components</h2>
      <p>Problem:</p>

      <p>Create a reusable Button component with the following requirements:</p>
      <ul>
        <li>
          The component should accept a label prop (the text displayed on the
          button).
        </li>
        <li>It should accept an optional onClick handler function.</li>
        <li>
          It should allow for different button variants: primary, secondary, or
          danger, and display the correct styles based on the variant.
        </li>
        <li>The component should be typed strictly using TypeScript.</li>
      </ul>
      <div>
        <Button variants="primary" label="primary" />
        <Button variants="secondary" label="secondary" />
        <Button variants="danger" label="danger" />
      </div>
    </div>
  );
};
export default ReuasableButton;
