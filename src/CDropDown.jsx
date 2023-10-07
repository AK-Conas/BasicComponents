import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import CInput from "./CInput";

const CDropDown = ({ cHelperText, cData, cErrorMsg, cOnChange }) => {
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (newValue) => {
    setSelectedValue(newValue);
    cOnChange(newValue);
  };

  return (
    <Autocomplete
      options={cData || []}
      onChange={(event, newValue) => handleChange(newValue)}
      getOptionLabel={(option) => option}
      value={selectedValue}
      renderInput={(params) => (
        <CInput
          cHintText={cHelperText}
          cDropDown={params}
          cErrorMsg={cErrorMsg}
        />
      )}
    />
  );
};

export default CDropDown;
