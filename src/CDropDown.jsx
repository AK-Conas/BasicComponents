import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@mui/material";
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

const CDropDown = ({ cHintText, cData, cErrorMsg }) => {
  const [values, setValues] = React.useState("");

  const handleChange = (event) => {
    setValues(event.target.value);
  };

  // Create an array of key-value pairs from the object
  const keyValuePairs = Object.entries(cData);
  return (
    <ThemeProvider theme={themeMain}>
      <FormControl
        sx={{ m: 1, minWidth: 300 }}
        error={cErrorMsg !== undefined && cErrorMsg !== ""}
      >
        <InputLabel id="demo-simple-select-label">{cHintText}</InputLabel>
        <Select value={values} label={cHintText} onChange={handleChange}>
          {keyValuePairs.map(([key, value]) => (
            <MenuItem value={key}>{value}</MenuItem>
          ))}
        </Select>
        <FormHelperText>
          {cErrorMsg === undefined ? " " : cErrorMsg}
        </FormHelperText>
      </FormControl>
    </ThemeProvider>
  );
};

export default CDropDown;
