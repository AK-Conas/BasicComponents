// import * as React from "react";
// import IconButton from "@mui/material/IconButton";
// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from "@mui/material/DialogContent";
// import Slide from "@mui/material/Slide";
// import Grid from "@mui/material/Grid";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// const CCarousel = ({ cOpen, cHeader, cProductData }) => {
//   const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);

//   // Function to navigate to the previous image
//   const handlePreviousImage = () => {
//     if (selectedImageIndex > 0) {
//       setSelectedImageIndex(selectedImageIndex - 1);
//     }
//   };

//   // Function to navigate to the next image
//   const handleNextImage = () => {
//     if (selectedImageIndex < cProductData.length - 1) {
//       setSelectedImageIndex(selectedImageIndex + 1);
//     }
//   };

//   return (
//     <Dialog open={cOpen} TransitionComponent={Transition} maxWidth="xl">
//       <DialogTitle
//         sx={{
//           textAlign: "center",
//           color: (theme) => theme.palette.primary.main,
//           fontWeight: "bold",
//         }}
//       >
//         {cHeader}
//       </DialogTitle>
//       <DialogContent>
//         <Grid container md={10} spacing={2}>
//           <Grid
//             item
//             xs={1}
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "flex-start",
//             }}
//           >
//             <IconButton onClick={handlePreviousImage}>
//               <ArrowBackIosIcon />
//             </IconButton>
//           </Grid>
//           <Grid item>
//             <img
//               src={cProductData[selectedImageIndex].imageUrl}
//               alt={cProductData[selectedImageIndex].name}
//             />
//           </Grid>
//           <Grid
//             item
//             xs={1}
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "flex-end",
//             }}
//           >
//             <IconButton onClick={handleNextImage}>
//               <ArrowForwardIosIcon />
//             </IconButton>
//           </Grid>
//         </Grid>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default CCarousel;
