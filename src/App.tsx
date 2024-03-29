import { useState, useEffect } from "react";
import "normalize.css";
import "./App.css";
import Nav from "./component/Nav";
import Aside from "./component/Aside";
import Main from "./component/Main";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
    console.log(">> Dark Mode changed:", darkMode);
    console.log(">> newMode:", newMode);
  };

  return (
    // Container: for dark class
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-bg-light text-primary-light dark:bg-bg-dark dark:text-primary-dark">
        <Nav darkMode={darkMode} onToggleDarkMode={toggleDarkMode}></Nav>
        <div className="flex flex-row">
          {/* <Aside></Aside>
          <Main></Main> */}
        </div>
      </div>
    </div>
  );
}

export default App;
