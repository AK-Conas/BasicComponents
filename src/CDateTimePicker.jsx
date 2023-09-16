import React, { useState } from "react";

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
      style={{ fontSize: "1.2em", padding: "1em", color: "blue" }}
    />
  );
}

export default CDateTimePicker;
