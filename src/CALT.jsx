import * as React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Snackbar, SnackbarContent } from "@mui/material";
import { CheckCircleOutline, ErrorOutline } from "@mui/icons-material";

export default function CALT({ cMessage, cOpen, cType, handleAlertClose }) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    handleAlertClose();
  };
  const icon = cType === "success" ? <CheckCircleOutline /> : <ErrorOutline />;
  if (cMessage !== undefined) {
    //TransitionProps={{ onExited: handleExited }}
    return (
      <div>
        {/* <Snackbar
          open={cOpen}
          autoHideDuration={5000}
          onClose={handleClose}
          message={cMessage}
          action={
            <React.Fragment>
              <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
              </Button>
              <IconButton
                aria-label="close"
                color="inherit"
                sx={{ p: 0.5 }}
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>
            </React.Fragment>
          }
        /> */}
        <Snackbar
          anchorOrigin={{
            vertical: "middle",
            horizontal: "center",
          }}
          open={cOpen}
          autoHideDuration={5000} // Adjust the duration as needed
          onClose={handleClose}
          style={{
            maxWidth: "400px", // Adjust the width as needed
            margin: "0 auto", // Center horizontally
            marginTop: "20vh", // Adjust the vertical position as needed
            borderRadius: "8px", // Add rounded corners
          }}
        >
          <SnackbarContent
            style={{
              backgroundColor: cType === "success" ? "green" : "red",
              display: "flex",
              alignItems: "center",
              padding: "12px", // Add some padding
            }}
            message={
              <span style={{ display: "flex", alignItems: "center" }}>
                {icon}
                <span style={{ marginLeft: "8px" }}>{cMessage}</span>
              </span>
            }
          />
        </Snackbar>
      </div>
    );
  } else {
    return <div />;
  }
}
