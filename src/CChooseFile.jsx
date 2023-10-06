import React, { useState } from "react";
import CInput from "./CInput";

export const IMG_TYPE = "IMG";
export const DOC_TYPE = "DOC";
export const XCEL_TYPE = "XCL";

const CChooseFile = ({ cFileType, cTooltipText, cDisabled, cHelperText }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  let fileType = "";
  if (cFileType === IMG_TYPE) {
    fileType = ".jpg, .jpeg, .png";
  }
  //todo add other file types
  if (cHelperText === undefined) {
    cHelperText = "Choose File: " + fileType;
  }
  return (
    <CInput
      cTooltipText={cTooltipText}
      cDisabled={cDisabled}
      cHelperText={cHelperText}
      cType={"file"}
      cinputProps={{
        accept: fileType,
      }}
      cOnChange={handleFileChange}
    />
  );
};

export default CChooseFile;
