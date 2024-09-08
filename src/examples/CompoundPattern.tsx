import React from "react";
import Dropdown from "../components/Dropdown";

const CompoundPattern: React.FC = () => {
  return (
    <div>
      <h2>Compound Components Pattern</h2>
      <h4>Scenario:</h4>
      <p>
        You need to create a Dropdown component that consists of several
        subcomponents (Dropdown, DropdownButton, and DropdownMenu). These
        components should work together seamlessly without having to explicitly
        pass props down between them.
      </p>
      <h4>Objective:</h4>
      <ul>
        <li>
          Build a Dropdown component where:
          <ul>
            <li>DropdownButton toggles the visibility of DropdownMenu.</li>
            <li>
              DropdownMenu shows or hides based on the state managed by
              Dropdown.
            </li>
          </ul>
        </li>
      </ul>
      <div>
        <Dropdown />
      </div>
    </div>
  );
};
export default CompoundPattern;
