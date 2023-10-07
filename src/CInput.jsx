import React from "react";
import { TextField } from "@mui/material";

//add-minWidth, https://mui.com/base-ui/react-textarea-autosize/
//close icon is too close for search
//In case of error in dropdown and input, handle space of the below button
//if (cHintText !== undefined) { removed as it was not working for well for choose file
// inputProps={{
//   min: 0, // Set the minimum value
//   max: 100, // Set the maximum value
//   step: 1, // Set the step (optional)
// }}
//this does not work with typing, for that
//method check has to be added
/**
 * Component for input
 * @param {number} price - The price of the product.
 * @param {number} quantity - The quantity of the product.
 * @param {number} quantity - The quantity of the product.
 * @param {number} quantity - The quantity of the product.
 */
const CInput = ({
  cVariant,
  cHintText,
  cDisabled,
  cHelperText,
  cErrorMsg,
  cType,
  cRows,
  cOnChange,
  cinputProps,
  cInputProps,
  cDropDown,
}) => {
  if (cHintText === undefined) {
    cHintText = "";
  }
  return (
    <TextField
      disabled={cDisabled}
      label={cHintText}
      color="primary"
      variant={cVariant === undefined ? "outlined" : cVariant}
      error={cErrorMsg === undefined ? "" : cErrorMsg}
      type={cType === undefined ? "text" : cType}
      helperText={cHelperText === undefined ? " " : cHelperText}
      multiline={cRows > 1 ? true : false}
      inputProps={cinputProps}
      InputProps={cInputProps}
      onChange={cOnChange}
      rows={cRows === undefined ? 10 : cRows}
      fullWidth
      {...cDropDown}
    />
  );
};

export default CInput;
