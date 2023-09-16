import React, { useState } from "react";
import { styled } from "@mui/system";

const TextComponent = ({ variant, disabled, label, href, isBackground }) => {
  const CustomText = styled(Text)(({ theme, variant, children }) => ({
    color:
      variant === "header"
        ? "#green"
        : variant === "sub-header"
        ? "#0000FF"
        : variant === "normal"
        ? "#FF0000"
        : "inherit",
    backgroundColor: isBackground ? "#ffffff" : "inherit",
    opacity: disabled ? "0.4" : "1.0",
    fontWeight: variant === "third" ? "bold" : "inherit",
  }));

  if (variant === "header") {
    return (
      <a href={"https://www.google.com"}>
        <h1>{label}</h1>
      </a>
    );
  } else if (variant === "sub-header") {
    return <h3>{label}</h3>;
  } else if (variant === "normal") {
    return <p>{label}</p>;
  }
};

export default TextComponent;
