import React, { useState } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

import Home from "./Home";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createMuiTheme({
    spacing: 4,
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#4a148c",
      },
      secondary: {
        main: "#3ea6ff",
        main2: "#3f51b5",
      },
      background: {
        default: darkMode ? "#232323" : "#fff",
        dark: darkMode ? "#181818" : "#f4f6f8",
        paper: darkMode ? "#232323" : "#fff",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  );
}

export default App;
