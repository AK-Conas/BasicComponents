import React, { useState } from "react";

const primary = "#042560";
const secondary = "#3cb043";

//todo Do we need to handle customized version here. as font is also different
function CDateTimePicker() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (e) => {
    setSelectedDate(new Date(e.target.value));
  };

  return (
    <input
      type="datetime-local"
      value={selectedDate.toISOString().substring(0, 16)}
      onChange={handleDateChange}
      style={{
        fontSize: "1.3em",
        padding: "1em",
      }}
    />
  );
}

export default CDateTimePicker;
