import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ReactHooks from "./examples/ReactHooks";
import ReuasableButton from "./examples/ReusableButton";
import HighOrder from "./examples/HighOrder";
import StateManagement from "./examples/StateManagement";
import PerformanceManagement from "./examples/PerformanceManagement";
import RenderPropPattern from "./examples/RenderPropPattern";

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <h1>React ⚛️ + Vite ⚡ + Replit 🌀</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/examples/hooks">
                React Hooks (useState, useEffect)
              </Link>
            </li>
            <li>
              <Link to="/examples/button">Reuasable Button Typescript</Link>
            </li>
            <li>
              <Link to="/examples/hoc">High order component</Link>
            </li>
            <li>
              <Link to="/examples/theme">State Managment</Link>
            </li>
            <li>
              <Link to="/examples/performance">Performance Managment</Link>
            </li>
            <li>
              <Link to="/examples/renderprop">Render Props Pattern</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <p>Welcome! Simple React Web App for practicing tect tests.</p>
            }
          />
          <Route path="/examples/hooks" element={<ReactHooks />} />
          <Route path="/examples/button" element={<ReuasableButton />} />
          <Route path="/examples/hoc" element={<HighOrder />} />
          <Route path="/examples/theme" element={<StateManagement />} />
          <Route
            path="/examples/performance"
            element={<PerformanceManagement />}
          />
          <Route path="/examples/renderprop" element={<RenderPropPattern />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
