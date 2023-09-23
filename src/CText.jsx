import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

//todo add disabled as variant, if needed
const CText = ({ cVariant, cText, cTooltipText }) => {
  let tColor = "inherit";
  if (cVariant === "header_card") {
    tColor = "white";
    cVariant = "h6";
    return (
      <Box bgcolor="secondary.main" p={2} aria-label={cTooltipText}>
        <Typography variant={cVariant} color={tColor}>
          {cText}
        </Typography>
      </Box>
    );
  } else if (cVariant === "title_card") {
    tColor = "secondary";
    cVariant = "subtitle1";
  }
  return (
    <Typography variant={cVariant} color={tColor} aria-label={cTooltipText}>
      {cText}
    </Typography>
  );
};

export default CText;
