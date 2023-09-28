import React from "react";
import { Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const CToast = ({ cHeader, cMessage, cOpen, cType, cHandleAlertClose }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    cHandleAlertClose();
  };
  if (cMessage !== undefined) {
    return (
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={cOpen}
        autoHideDuration={5000}
        onClose={handleClose}
        TransitionProps={{ onExited: handleClose }}
      >
        <Alert severity={cType}>
          <AlertTitle>{cHeader}</AlertTitle>
          {cMessage}
        </Alert>
        {/* there are other options of coloring on this filled etc */}
      </Snackbar>
    );
  }
};

export default CToast;
