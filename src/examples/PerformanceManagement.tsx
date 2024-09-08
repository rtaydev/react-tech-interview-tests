import React from "react";
import Button from "../components/Button";
import CounterList from "../components/CounterList";
import { useThemeSwitcher } from "../hooks/useThemeSwitcher";

const PerformanceManagement: React.FC = () => {
  const { toggleTheme, currentTheme } = useThemeSwitcher();
  return (
    <div>
      <h2>Performance Optimization with Memoization</h2>
      <p>Problem:</p>

      <p>
        You have a component that renders a list of items and a counter. The
        counter increments when a button is clicked, but the list should only
        re-render if the list items change, not when the counter is updated.
      </p>
      <p>Your task is to:</p>
      <ul>
        <li>
          Use React.memo to prevent the list from re-rendering when only the
          counter changes.
        </li>
        <li>
          Use useCallback to ensure the onClick handlers for the list items
          don’t cause unnecessary re-renders.
        </li>
        <li>
          Use useMemo to memoize the filtered list of items based on a search
          input.
        </li>
      </ul>
      <div>
        <CounterList />
      </div>
    </div>
  );
};
export default PerformanceManagement;
