import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Sample from "./Sample";
import Tariff from "./tariff/tariff";
// import TestHere from "./TestHere";

const themeMain = createTheme({
  palette: {
    primary: {
      main: "#042560",
    },
    secondary: {
      main: "#3cb043",
    },
  },
});
export default function App() {
  return (
    <ThemeProvider theme={themeMain}>
      <Sample />
      {/* <Tariff /> */}
      {/* <TestHere /> */}
    </ThemeProvider>
  );
}
