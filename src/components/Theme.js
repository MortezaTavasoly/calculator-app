import React from "react";
import "./theme.css";
import useTheme from "../hooks/useTheme";
export default function Theme() {
  const { modeChange } = useTheme();

  const handleTheme = (color) => {
    modeChange(color);
  };
  return (
    <div className="theme">
      <h2>calc</h2>
      <div className="theme-container">
        <p>THEME</p>
        <div className="themes">
          <div
            className="colors blue"
            onClick={() => {
              handleTheme("blue");
            }}
          ></div>
          <div
            className="colors white"
            onClick={() => {
              handleTheme("white");
            }}
          ></div>
          <div
            className="colors purple"
            onClick={() => {
              handleTheme("purple");
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
