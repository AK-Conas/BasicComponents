import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";

const CCheckButton = ({
  cLabel,
  isChecked,
  handleChange,
  isDisabled,
  isMultiple,
  cTooltipText,
}) => {
  if (isMultiple) {
    return (
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
        aria-label={cTooltipText}
      />
    );
  } else {
    return (
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
        aria-label={cTooltipText}
      />
    );
  }
};

export default CCheckButton;
