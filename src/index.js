import React from "react";
import ReactDOM from "react-dom/client";  // ✅ Use createRoot
import App from "./App";
import ThemeContextProvider from "./contexts/ThemeContext"; // ✅ Correct Import

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Corrected
root.render(
  <React.StrictMode>
    <ThemeContextProvider> {/* ✅ Wrap the App with Theme Provider */}
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
