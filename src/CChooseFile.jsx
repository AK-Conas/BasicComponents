// import React, { useState } from "react";
// import { Card, CardContent, Typography, Input } from "@mui/material";
// import Button from "@mui/material/Button";

// function CChooseFile() {
//   // <Input type="file" />

//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setSelectedFile(file);
//   };

//   // return (
//   //   <div>
//   //       <h2>Choose File</h2>
//   //     <input
//   //       type="file"
//   //       onChange={handleFileChange}
//   //       accept=".jpg, .jpeg, .png, .pdf" // Specify allowed file types
//   //     />
//   //     {selectedFile && <p>Selected File: {selectedFile.name}</p>}
//   //   </div>
//   // );
//   return (
//     <div>
//       {/* <Input
//         type="file"
//         inputProps={{
//           accept: ".pdf, .doc, .docx", // Define accepted file types if needed
//         }}
//         onChange={handleFileChange}
//       /> */}
//       <Button variant="contained" color="primary" component="label">
//         Choose File
//         <Input
//           type="file"
//           style={{ display: "none" }}
//           accept=".pdf, .doc, .docx" // Define accepted file types if needed
//           onChange={handleFileChange}
//         />
//       </Button>
//       {selectedFile && <p>Selected file: {selectedFile.name}</p>}
//     </div>
//   );
// }

// export default CChooseFile;
import React, { useRef } from "react";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

function CChooseFile() {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    // Trigger the file input's click event when the button is clicked
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // Handle the selected file here
      console.log("Selected file:", selectedFile);
    }
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleButtonClick}>
        Select File
      </Button>
      <Input
        type="file"
        inputProps={{ accept: "image/*" }}
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleFileChange}
      />
    </div>
  );
}

export default CChooseFile;
