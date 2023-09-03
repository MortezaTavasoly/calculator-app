import { useEffect, useState } from "react";
import "./App.css";
import Theme from "./components/Theme";
import Numbers from "./components/Numbers";
import useTheme from "./hooks/useTheme";

function App() {
  const [display, setDisplay] = useState("");
  const { mode } = useTheme();
  const [error, setError] = useState("");

  if (mode === "blue") {
    const color = "hsl(222, 26%, 31%)";
    document.body.style.backgroundColor = color;
  } else if (mode === "white") {
    const color = "hsl(0, 0%, 90%)";
    document.body.style.backgroundColor = color;
  } else if (mode === "purple") {
    const color = "hsl(268, 75%, 9%)";
    document.body.style.backgroundColor = color;
  }

  const handleDel = () => {
    setError("");

    try {
      setDisplay(display.slice(0, -1));
    } catch (error) {
      handleReset();
    }
  };

  const handleValue = (e) => {
    setError("");
    setDisplay((prev) => prev + e);
  };

  const handleResult = () => {
    try {
      setDisplay(eval(display));
    } catch (error) {
      setDisplay("");
      setError("Please Put Numbers Correctly !!!");
    }
  };

  const handleReset = () => {
    setError("");
    setDisplay("");
  };

  return (
    <div className={"App " + mode}>
      <Theme />
      <div className="display ">
        {error && <h1>{error}</h1>}
        {display && <h1>{display}</h1>}
      </div>
      <div className="characters">
        <Numbers handleValue={handleValue} handleDel={handleDel} />
        <div className="result-btns">
          <button className="reset-del" onClick={handleReset}>
            RESET
          </button>
          <button className="result" onClick={handleResult}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
