"use client";
import React, { useState, useEffect, createContext, useContext } from "react";

// Create context
const DarkModeContext = createContext();

function UseToggle({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedValue = localStorage.getItem("darkMode");
    if (storedValue !== null) {
      setDarkMode(JSON.parse(storedValue));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

// Custom hook to use the context
export const useDarkMode = () => useContext(DarkModeContext);

export default UseToggle;
