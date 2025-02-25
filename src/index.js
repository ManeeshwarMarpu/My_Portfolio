// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ThemeContextProvider from "./contexts/ThemeContext";  // ✅ Correct Import

ReactDOM.render(
  <ThemeContextProvider>  {/* ✅ Wrap the App with Theme Provider */}
    <App />
  </ThemeContextProvider>,
  document.getElementById("root")
);
