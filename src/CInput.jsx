import React from "react";
import { TextField } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import InputAdornment from "@mui/material/InputAdornment";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import CButton from "./CButton";

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
function CInput({
  children,
  cHintText,
  cDisabled,
  cError,
  cErrorMsg,
  cType,
  cRows,
}) {
  if (cHintText !== undefined) {
    return (
      <ThemeProvider theme={themeMain}>
        <TextField
          disabled={cDisabled}
          label={cHintText}
          color="primary"
          error={cError}
          type={cType === undefined ? "text" : cType}
          helperText={cError ? cErrorMsg : ""}
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
