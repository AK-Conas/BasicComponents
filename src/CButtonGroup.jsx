import * as React from "react";
import Stack from "@mui/material/Stack";
import CButton from "./CButton";

const CButtonGroup = ({}) => {
  return (
    <Stack direction="row" spacing={2}>
      <CButton cText="OneSeven" />
      <CButton cText="TwoTwo" />
      <CButton cText="Three" />
    </Stack>
  );
};

export default CButtonGroup;
