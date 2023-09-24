// // import * as React from "react";
// // import Button from "@mui/material/Button";
// // import Snackbar from "@mui/material/Snackbar";
// // import IconButton from "@mui/material/IconButton";
// // import CloseIcon from "@mui/icons-material/Close";

// // export default function CAlertToast() {
// //   const [snackPack, setSnackPack] = React.useState([]);
// //   const [open, setOpen] = React.useState(false);
// //   const [messageInfo, setMessageInfo] = React.useState(undefined);

// //   React.useEffect(() => {
// //     if (snackPack.length && !messageInfo) {
// //       // Set a new snack when we don't have an active one
// //       setMessageInfo({ ...snackPack[0] });
// //       setSnackPack((prev) => prev.slice(1));
// //       setOpen(true);
// //     } else if (snackPack.length && messageInfo && open) {
// //       // Close an active snack when a new one is added
// //       setOpen(false);
// //     }
// //   }, [snackPack, messageInfo, open]);

// //   const handleClick = (message) => () => {
// //     setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
// //   };

// //   const handleClose = (event, reason) => {
// //     if (reason === "clickaway") {
// //       return;
// //     }
// //     setOpen(false);
// //   };

// //   const handleExited = () => {
// //     setMessageInfo(undefined);
// //   };

// //   return (
// //     <div>
// //       <Button onClick={handleClick("Message A")}>Show message A</Button>
// //       <Button onClick={handleClick("Message B")}>Show message B</Button>
// //       <Snackbar
// //         key={messageInfo ? messageInfo.key : undefined}
// //         open={open}
// //         autoHideDuration={6000}
// //         onClose={handleClose}
// //         TransitionProps={{ onExited: handleExited }}
// //         message={messageInfo ? messageInfo.message : undefined}
// //         action={
// //           <React.Fragment>
// //             <Button color="secondary" size="small" onClick={handleClose}>
// //               UNDO
// //             </Button>
// //             <IconButton
// //               aria-label="close"
// //               color="inherit"
// //               sx={{ p: 0.5 }}
// //               onClick={handleClose}
// //             >
// //               <CloseIcon />
// //             </IconButton>
// //           </React.Fragment>
// //         }
// //       />
// //     </div>
// //   );
// // }

// import React from "react";
// import { Snackbar, SnackbarContent } from "@mui/material";
// import { CheckCircleOutline, ErrorOutline } from "@mui/icons-material";
// import Alert from "@mui/material/Alert";
// import AlertTitle from "@mui/material/AlertTitle";

// const CAlertToast = ({ open, message, type, onClose }) => {
//   const icon = type === "success" ? <CheckCircleOutline /> : <ErrorOutline />;

//   return (
//     <Snackbar
//       anchorOrigin={{
//         vertical: "middle",
//         horizontal: "center",
//       }}
//       open={open}
//       autoHideDuration={3000} // Adjust the duration as needed
//       onClose={onClose}
//       style={{
//         maxWidth: "400px", // Adjust the width as needed
//         margin: "0 auto", // Center horizontally
//         marginTop: "20vh", // Adjust the vertical position as needed
//         borderRadius: "8px", // Add rounded corners
//       }}
//     >
//       <Alert severity="error">
//         <AlertTitle>Error</AlertTitle>
//         This is an error alert — <strong>check it out!</strong>
//       </Alert>
//       {/* <SnackbarContent
//         style={{
//           backgroundColor: type === "success" ? "green" : "red",
//           display: "flex",
//           alignItems: "center",
//           padding: "12px", // Add some padding
//         }}
//         message={
//           <span style={{ display: "flex", alignItems: "center" }}>
//             {icon}
//             <span style={{ marginLeft: "8px" }}>{message}</span>
//           </span>
//         }
//       /> */}
//     </Snackbar>
//   );
// };

// export default CAlertToast;
