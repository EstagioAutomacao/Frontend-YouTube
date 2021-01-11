import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

import Home from "./Home";
function App() {
  const theme = createMuiTheme({
    spacing: 1,
    palette: {
      primary: {
        main: "#4a148c",
      },
      secondary: {
        main: "#3f51b5",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
