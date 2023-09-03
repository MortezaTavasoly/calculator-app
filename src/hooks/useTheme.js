import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

export default function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}
