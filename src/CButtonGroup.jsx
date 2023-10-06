import * as React from "react";
import Stack from "@mui/material/Stack";

const CButtonGroup = ({ children }) => {
  return (
    <Stack direction="row" spacing={children.length}>
      {children}
    </Stack>
  );
};

export default CButtonGroup;
