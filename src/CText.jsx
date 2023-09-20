import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

const CText = ({ cVariant, cDisabled, cText }) => {
  let tColor = "inherit";
  if (cVariant === "header_card") {
    tColor = "white";
    cVariant = "h6";
    return (
      <ThemeProvider theme={themeMain}>
        <Box bgcolor="secondary.main" p={2}>
          <Typography variant={cVariant} color={tColor}>
            {cText}
          </Typography>
        </Box>
      </ThemeProvider>
    );
  } else if (cVariant === "title_card") {
    tColor = "primary";
    cVariant = "subtitle1";
  }
  return (
    <ThemeProvider theme={themeMain}>
      <Typography variant={cVariant} color={tColor}>
        {cText}
      </Typography>
    </ThemeProvider>
  );
};

export default CText;
