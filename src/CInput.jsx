import React from "react";
import { styled } from "@mui/system";
import { TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InputAdornment from "@mui/material/InputAdornment";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CButton from "./CButton";

const numericConst = 1;
const searchConst = 2;

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

const CustomInput = styled(TextField)(({ theme, isDisabled }) => ({}));

//todo check later     cTooltipText,   add-minWidth,    check for circular background for close icon
function CInput({
  children,
  cHintText,
  cDisabled,
  cError,
  cErrorMsg,
  cType,
  cRows
}) {
  //   const search = InputProps={{
  //     endAdornment: (
  //       <InputAdornment
  //         position="end"
  //         className="inputAdornment"
  //       >
  //      <CButton
  //         cSrcSimple={<CloseIcon />}
  //         cTooltipText="Image Button"
  //       />
  //     </InputAdornment>
  //   ),
  // }};
  let searchUI = {};
  if (cType === searchConst) {
    searchUI = {
      InputProps: {
        endAdornment: (
          <InputAdornment position="end" className="inputAdornment">
            <CButton cSrcSimple={<CloseIcon />} cTooltipText="Image Button" />
          </InputAdornment>
        )
      }
    };
  }

  if (cHintText !== undefined) {
    return (
      <ThemeProvider theme={themeMain}>
        <CustomInput
          disabled={cDisabled}
          label={cHintText}
          color="primary"
          error={cError}
          type={cType === numericConst ? "number" : "text"}
          helperText={cError ? cErrorMsg : ""}
          multiline={cRows > 1 ? true : false}
          rows={cRows === undefined ? 10 : cRows}
          {...searchUI}
        />
      </ThemeProvider>
    );
  }
}

export default CInput;
