import React from "react";
import IconButton from "@mui/material/IconButton";
import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

//todo check later  cursor:(isDisabled?'not-allowed':'inherit')
//sx={{ cursor: cDisabled ? "not-allowed" : "inherit" }} only working for normal button
//href={cLink}
//variant="extended"
//{cSrc} Hello
//todo can use if want both text and icon

const CButton = ({ cText, cSrc, cTooltipText, cDisabled, cOnClick, cLink }) => {
  const buttonStyle = {
    fontWeight: "bold",
    padding: "1em",
    borderRadius: "0.5em",
  };

  const handleClick = () => {
    // Handle button click here
    //console.log("is this working button.js");
    if (cOnClick !== undefined) {
      cOnClick();
    }
  };
  //span is added in order to show tooltip on disabled element
  if (cSrc !== undefined) {
    return (
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
    );
  } else if (cText !== undefined) {
    return (
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
    );
  }
};

export default CButton;
