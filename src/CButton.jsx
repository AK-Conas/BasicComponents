import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const CustomButton = styled(Button)(({ theme, isDisabled }) => ({
  backgroundColor: isDisabled ? "#E9E9E9" : "#3cb043",
  color: "#FFFFFF",
  fontWeight: isDisabled ? "inherit" : "bold",
  padding: "1em",
  borderRadius: "0.5em",
  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
  "&:hover": {
    backgroundColor: "#13A538"
  }
}));

const SimpleButton = styled(Button)(({ theme, isDisabled }) => ({
  fontWeight: isDisabled ? "inherit" : "bold",
  padding: "1em",
  borderRadius: "0.5em"
}));

//todo check later  cursor:(isDisabled?'not-allowed':'inherit'),     cTooltipText
function CButton({
  children,
  cText,
  cSrc,
  cSrcSimple,
  cTooltipText,
  c_disabled,
  cOnClick
}) {
  const buttonVariant = c_disabled ? "disabled" : "default"; // You can use a variant to toggle styles

  const handleClick = () => {
    // Handle button click here
    console.log("is this working button.js");
    if (cOnClick !== undefined) {
      cOnClick();
    }
  };

  if (cSrcSimple !== undefined) {
    return (
      <SimpleButton
        variant={buttonVariant}
        isDisabled={c_disabled}
        onClick={handleClick}
      >
        {cSrcSimple}
      </SimpleButton>
    );
  }

  if (cSrc !== undefined) {
    return (
      <CustomButton
        variant={buttonVariant}
        isDisabled={c_disabled}
        onClick={handleClick}
      >
        {cSrc}
      </CustomButton>
    );
  }

  if (cText !== undefined) {
    return (
      <CustomButton
        variant={buttonVariant}
        isDisabled={c_disabled}
        onClick={handleClick}
      >
        {cText}
      </CustomButton>
    );
  }
}

export default CButton;
