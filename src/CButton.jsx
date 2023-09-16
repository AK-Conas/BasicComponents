import React from "react";
import IconButton from "@mui/material/IconButton";
import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import CloseIcon from "@mui/icons-material/Close";
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
//todo check later  cursor:(isDisabled?'not-allowed':'inherit')
//cTooltipText - check how to add tooltip in mui,  href={cLink}
//{/* Both text and image check later todo. rest button all done */}
function CButton({
  cText,
  cSrc,
  cSrcSimple,
  cTooltipText,
  c_disabled,
  cOnClick,
  cLink,
}) {
  const buttonStyle = {
    fontWeight: "bold",
    padding: "1em",
    borderRadius: "0.5em",
  };

  const handleClick = () => {
    // Handle button click here
    console.log("is this working button.js");
    if (cOnClick !== undefined) {
      cOnClick();
    }
  };

  if (cSrcSimple !== undefined) {
    return (
      <ThemeProvider theme={themeMain}>
        <IconButton
          aria-label={cTooltipText}
          disabled={c_disabled}
          onClick={handleClick}
          color="primary"
        >
          {cSrcSimple}
        </IconButton>
      </ThemeProvider>
    );
  }
  if (cSrc !== undefined) {
    return (
      <ThemeProvider theme={themeMain}>
        <Fab
          aria-label={cTooltipText}
          disabled={c_disabled}
          onClick={handleClick}
          color="primary"
          variant="contained"
        >
          {cSrc}
        </Fab>
      </ThemeProvider>
    );
  }
  if (cText !== undefined) {
    return (
      <ThemeProvider theme={themeMain}>
        <Button
          aria-label={cTooltipText}
          disabled={c_disabled}
          onClick={handleClick}
          color="primary"
          variant="contained"
          style={buttonStyle}
        >
          {cText}
        </Button>
      </ThemeProvider>
    );
  }
}

export default CButton;
