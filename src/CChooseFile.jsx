import React, { useState } from "react";
import CInput from "./CInput";

const CChooseFile = (cFileTypes) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <CInput
      aria-label="cTooltipText"
      cDisabled={false}
      cHelperText={"" + cFileTypes}
      cType={"file"}
      cInputProps={{
        accept: cFileTypes,
      }}
      cChange={handleFileChange}
      style={{
        backgroundColor: "blue",
      }}
    />
  );
};

export default CChooseFile;
