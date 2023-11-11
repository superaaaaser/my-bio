import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Nav from "./components/NavbarComponents.jsx";
import Skill from "./components/SkillComponents.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <Nav />
      <App />
      <Skill />
    </>
  </React.StrictMode>
);
