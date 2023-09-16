import React from "react";
import { TextField } from "@mui/material";
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

//todo check later
//cTooltipText,
//add-minWidth,
//close icon is too close for search
//In case of error in dropdown and input, handle space of the below button
function CInput({ cHintText, cDisabled, cErrorMsg, cType, cRows }) {
  if (cHintText !== undefined) {
    return (
      <ThemeProvider theme={themeMain}>
        <TextField
          disabled={cDisabled}
          label={cHintText}
          color="primary"
          error={cErrorMsg === undefined ? "" : cErrorMsg}
          type={cType === undefined ? "text" : cType}
          helperText={cErrorMsg === undefined ? " " : cErrorMsg}
          multiline={cRows > 1 ? true : false}
          // inputProps={{
          //   min: 0, // Set the minimum value
          //   max: 100, // Set the maximum value
          //   step: 1, // Set the step (optional)
          // }}
          //this does not work with typing, for that
          //method check has to be added
          rows={cRows === undefined ? 10 : cRows}
        />
      </ThemeProvider>
    );
  }
}

export default CInput;
