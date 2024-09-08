import React from "react";
import Button from "../components/Button";
import { useThemeSwitcher } from "../hooks/useThemeSwitcher";

const StateManagement: React.FC = () => {
  const { toggleTheme, currentTheme } = useThemeSwitcher();
  return (
    <div>
      <h2>State Management with Context API</h2>
      <p>Problem:</p>

      <p>
        Create a theme switcher application using the Context API. The app
        should:
      </p>
      <ul>
        <li>Provide two themes: light and dark.</li>
        <li>Allow switching between the themes using a toggle button.</li>
        <li>
          The theme should be accessible throughout the app, allowing different
          components to access and apply the current theme (e.g., text and
          background color changes).
        </li>
      </ul>
      <div>
        <Button variants="secondary" label="Color mode" onClick={toggleTheme} />
        <p
          style={{
            color: currentTheme.color,
            backgroundColor: currentTheme.backgroundColor,
          }}
        >
          Themed text
        </p>
      </div>
    </div>
  );
};
export default StateManagement;
