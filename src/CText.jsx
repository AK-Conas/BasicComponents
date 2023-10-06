import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

//todo add disabled as variant, if needed
const CText = ({ cVariant, cText }) => {
  let tColor = "inherit";
  if (cVariant === "header_card") {
    tColor = "white";
    cVariant = "h6";
    return (
      <Box
        bgcolor="secondary.main"
        p={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant={cVariant} color={tColor} fontWeight="bold">
          {cText}
        </Typography>
      </Box>
    );
  } else if (cVariant === "title_card") {
    tColor = "secondary";
    cVariant = "subtitle1";
  } else if (cVariant === "heading_section") {
    cVariant = "h6";
  }
  return (
    <Typography variant={cVariant} color={tColor}>
      {cText}
    </Typography>
  );
};

export default CText;
