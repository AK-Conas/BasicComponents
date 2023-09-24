import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";

const CCheckButton = ({
  cLabel,
  cChecked,
  cHandleChange,
  cDisabled,
  cMultiple,
  cTooltipText,
}) => {
  if (cMultiple) {
    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={cChecked}
            onChange={cHandleChange}
            disabled={cDisabled}
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
            checked={cChecked}
            onChange={cHandleChange}
            disabled={cDisabled}
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
