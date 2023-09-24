import * as React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import CButton from "./CButton";

export default function CButtonGroup() {
  return (
    <ButtonGroup>
      <CButton cMarginRight={true} cText="One" />
      <CButton cText="Two" />
    </ButtonGroup>
  );
}
