import React from "react";
import FormGroup from "@mui/material/FormGroup";
import CCheckButton from "./CCheckButton";
import RadioGroup from "@mui/material/RadioGroup";

const CCheckGroup = ({ cSingle, cData }) => {
  const onChange = (i, isChecked) => {
    console.log("AK: " + i + "   " + isChecked);
  };

  if (cSingle === true) {
    return (
      <RadioGroup sx={{ padding: "1em" }}>
        {cData.map((item) => (
          <CCheckButton
            key={item.value}
            cLabel={item.label}
            cSingle={true}
            cDisabled={item.isDisabled}
            cHandleCheck={() => onChange(item.value)}
            cHandleUnCheck={() => onChange(item.value)}
          />
        ))}
      </RadioGroup>
    );
    //() => onHandleChange()
  } else {
    return (
      <FormGroup sx={{ padding: "1em" }}>
        {cData.map((item) => (
          <CCheckButton
            key={item.value}
            cLabel={item.label}
            cDisabled={item.isDisabled}
            cHandleCheck={() => onChange(item.value, true)}
            cHandleUnCheck={() => onChange(item.value, false)}
          />
        ))}
      </FormGroup>
    );
  }
};

export default CCheckGroup;
