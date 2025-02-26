import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

// Define Light and Dark Themes
const lightTheme = {
  background: "#ffffff",
  text: "#000000",
  primary: "#854CE6",
};

const darkTheme = {
  background: "#121212",
  text: "#ffffff",
  primary: "#854CE6",
};

// Create Theme Context
export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark"); // Default to Dark Theme

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};

export default ThemeContextProvider;
