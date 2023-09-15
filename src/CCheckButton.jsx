import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const themeMain = createTheme({
  palette: {
    primary: {
      main: "#042560"
    },
    secondary: {
      main: "#3cb043"
    }
  }
});

const CheckButton = ({
  cLabel,
  isChecked,
  handleChange,
  isDisabled,
  isMultiple
}) => {
  if (isMultiple) {
    return (
      <ThemeProvider theme={themeMain}>
        <FormControlLabel
          control={
            <Checkbox
              checked={isChecked}
              onChange={handleChange}
              disabled={isDisabled}
              color="secondary"
            />
          }
          label={cLabel}
        />
      </ThemeProvider>
    );
  } else {
    return (
      <ThemeProvider theme={themeMain}>
        <FormControlLabel
          control={
            <Radio
              checked={isChecked}
              onChange={handleChange}
              disabled={isDisabled}
              color="secondary"
            />
          }
          label={cLabel}
        />
      </ThemeProvider>
    );
  }
};

export default CheckButton;
