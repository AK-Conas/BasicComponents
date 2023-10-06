import React, { useState } from "react";
import CInput from "./CInput";

const CDateTimePicker = ({
  cHelperText,
  cTooltipText,
  cDisabled,
  cOnChange,
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (e) => {
    setSelectedDate(new Date(e.target.value));
    cChange();
  };

  return (
    <CInput
      cTooltipText={cTooltipText}
      cDisabled={cDisabled}
      cHelperText={cHelperText}
      cType={"date"}
      cOnChange={handleDateChange}
    />
  );
};

export default CDateTimePicker;
