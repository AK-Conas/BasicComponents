import React from "react";
import IconButton from "@mui/material/IconButton";
import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
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
function CButton({
  cText,
  cSrc,
  cSrcSimple,
  cTooltipText,
  cDisabled,
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
        <Tooltip title={cTooltipText} arrow>
          <span>
            <IconButton
              aria-label={cTooltipText}
              disabled={cDisabled}
              onClick={handleClick}
              color="primary"
            >
              {cSrcSimple}
            </IconButton>
          </span>
        </Tooltip>
      </ThemeProvider>
    );
  }
  //  variant="extended"
  // {cSrc} Hello
  // todo can use if want both text and icon

  //span is added in order to show tooltip on disabled element
  if (cSrc !== undefined) {
    return (
      <ThemeProvider theme={themeMain}>
        <Tooltip title={cTooltipText} arrow>
          <span>
            <Fab
              aria-label={cTooltipText}
              disabled={cDisabled}
              onClick={handleClick}
              color="primary"
              variant="contained"
            >
              {cSrc}
            </Fab>
          </span>
        </Tooltip>
      </ThemeProvider>
    );
  }
  if (cText !== undefined) {
    return (
      <ThemeProvider theme={themeMain}>
        <Tooltip title={cTooltipText} arrow>
          <span>
            <Button
              aria-label={cTooltipText}
              disabled={cDisabled}
              onClick={handleClick}
              color="primary"
              variant="contained"
              style={buttonStyle}
            >
              {cText}
            </Button>
          </span>
        </Tooltip>
      </ThemeProvider>
    );
  }
}

export default CButton;
