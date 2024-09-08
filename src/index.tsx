import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeSwitchProvider } from "./hooks/useThemeSwitcher";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeSwitchProvider>
      <App />
    </ThemeSwitchProvider>
  </React.StrictMode>,
);
