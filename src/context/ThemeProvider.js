import React, { createContext, useReducer } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const themeReducer = (state, action) => {
    if (action.type) {
      return { ...state, mode: action.payload };
    }
  };

  const [state, dispatch] = useReducer(themeReducer, {
    mode: "blue",
  });

  const modeChange = (mode) => {
    dispatch({ type: "CHANGE_MODE", payload: mode });
  };

  return (
    <ThemeContext.Provider value={{ ...state, modeChange }}>
      {children}
    </ThemeContext.Provider>
  );
}
