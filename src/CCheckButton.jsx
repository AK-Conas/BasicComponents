import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";

const CCheckButton = ({
  cLabel,
  cChecked,
  cHandleCheck,
  cHandleUnCheck,
  cDisabled,
  cSingle,
  cTooltipText,
}) => {
  const [checked, setChecked] = React.useState(cChecked);
  const onHandleChange = (event) => {
    setChecked(event.target.checked);
    if (cHandleCheck !== undefined && event.target.checked === true) {
      cHandleCheck();
    } else if (cHandleUnCheck !== undefined && event.target.checked === false) {
      cHandleUnCheck();
    }
  };
  if (cSingle === true) {
    return (
      <FormControlLabel
        control={
          <Radio
            checked={checked}
            onChange={onHandleChange}
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
          <Checkbox
            checked={checked}
            onChange={onHandleChange}
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
