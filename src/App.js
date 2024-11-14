// src/App.jsx
import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Router from "./Router";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />{" "}
      {/* App에서 Router만 호출하고 Layout은 Router 내부에서 처리합니다 */}
    </ThemeProvider>
  );
}

export default App;
