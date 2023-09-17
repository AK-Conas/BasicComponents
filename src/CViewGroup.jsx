import React from 'react';
import { Box } from '@mui/material';

//direction = "vertical"
const CViewGroup = ({children}) => {
  return (
   const childrenWithMargin = React.Children.map(children, (child, index) => {
    // Apply margin to all children except the last one
    const childWithMargin = React.cloneElement(child, {
      style: {
        ...(child.props.style || {}),
        marginBottom: index < children.length - 1 ? '16px' : undefined,
      },
    });

    return childWithMargin;
  );
};

export default CViewGroup;
