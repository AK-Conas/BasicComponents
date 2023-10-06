import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@mui/material";

const CDropDown = ({ cHelperText, cData, cErrorMsg, cOnChange }) => {
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    cOnChange(value);
  };

  const isCData = cData !== undefined && typeof cData === "object";
  const keyValuePairs = isCData ? Object.entries(cData) : {};
  return (
    <FormControl error={cErrorMsg !== undefined && cErrorMsg !== ""} fullWidth>
      <InputLabel>{cHelperText}</InputLabel>
      <Select value={selectedValue} label={cHelperText} onChange={handleChange}>
        {isCData &&
          keyValuePairs.map(([key, value]) => (
            <MenuItem value={key}>{value}</MenuItem>
          ))}
      </Select>
      <FormHelperText>
        {cErrorMsg === undefined ? " " : cErrorMsg}
      </FormHelperText>
    </FormControl>
  );
};

export default CDropDown;
