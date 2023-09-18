import React from "react";
import { Box } from "@mui/material";

const VG = ({ children }) => {
  const childMargin = "2em";
  const childStyle = {
    marginRight: childMargin,
  };
  const childrenWithMargin = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      style: { ...child.props.style, ...childStyle },
    });
  });

  return <Box>{childrenWithMargin}</Box>;
};

export default VG;
