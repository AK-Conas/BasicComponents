import React, { useState } from "react";

const CDateTimePicker = (cTooltipText) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (e) => {
    setSelectedDate(new Date(e.target.value));
  };

  return (
    <input
      aria-label={cTooltipText}
      type="datetime-local"
      onChange={handleDateChange}
      style={{
        fontSize: "1em",
        padding: "1em",
        borderRadius: "0.2em",
        fontFamily: "Sans-serif",
        border: "1px solid #cccccc",
      }}
    />
  );
};

export default CDateTimePicker;
