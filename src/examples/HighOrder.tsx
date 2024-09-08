import React from "react";
import { LoggedButton } from "../components/LogWrapper";

const HighOrder: React.FC = () => {
  return (
    <div>
      <h2>Higher-Order Components (HOCs)</h2>
      <p>Problem:</p>

      <p>
        Create a higher-order component (HOC) that adds a logging functionality
        to any component it wraps. The logging should:
      </p>
      <ul>
        <li>Log the component's name when it mounts.</li>
        <li>Log when the component unmounts.</li>
        <li>Pass all the original props to the wrapped component.</li>
        <p>
          Additionally, ensure the HOC works with both function components and
          class components.
        </p>
      </ul>
      <div>
        <LoggedButton variants="primary" label="Logged Button" />
      </div>
    </div>
  );
};
export default HighOrder;
