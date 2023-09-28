import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

//todo not working as open is getting set only on component mount
const CBackDrop = ({ cOpen, cHandleClose }) => {
  return (
    <Backdrop
      sx={{ color: "#FFFFFF", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={cOpen}
      onClick={cHandleClose}
    >
      <CircularProgress color="primary" />
    </Backdrop>
  );
};

export default CBackDrop;
