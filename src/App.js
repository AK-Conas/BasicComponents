import "./styles.css";
import CInput from "./CInput";
import CButton from "./CButton";
import CCheckButton from "./CCheckButton";
import CChooseFile from "./CChooseFile";
import CDropDown from "./CDropDown";
import CDateTimePicker from "./CDateTimePicker";
import Extra from "./Extra";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";

import Button from "@mui/material/Button";

export default function App() {
  const handleClick = () => {
    // Handle button click here
    console.log("is this working App.js");
  };

  // State variable to track the error state of the TextField
  const [error, setError] = useState(0);

  const errorData = {
    0: "",
    1: "This is error message 1",
    2: "This is error message 2",
  };
  // Function to toggle the error state
  const handleToggle = () => {
    setError(error === 0 ? 1 : error === 1 ? 2 : 0);
  };

  //DropDownData
  const data = {
    10: "John",
    20: 30,
    30: "john@example.com",
    40: "New York",
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {/* <CButton
        cText="This is Conas Custom Default Button with text only"
        cTooltipText="Default Button"
        cOnClick={handleClick}
      />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <CButton
        cText="This is Conas Custom Disabled Button with text only"
        c_disabled={true}
        cTooltipText="Disabled Button"
        cOnClick={handleClick}
      />
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <CButton
        cSrcSimple={<CloseIcon />}
        cTooltipText="Link Button"
        cOnClick={handleClick}
        cLink={"https://mui.com/material-ui/react-floating-action-button/"}
      />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <CButton
        cSrc={<EditIcon />}
        cTooltipText="Image  Button"
        cOnClick={handleClick}
      />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <CButton
        cSrc={<EditIcon />}
        c_disabled={true}
        cTooltipText="Image Disabled Button"
        cOnClick={handleClick}
      />

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <CInput cHintText="This is Default Input Text" />

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <CInput cDisabled={true} cHintText="This is Disabled Input Text" />

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <CInput
        cHintText="This is Error Input Text"
        cErrorMsg={errorData[error]}
      />
      <br></br>
      <br></br>
      <Button variant="contained" onClick={handleToggle}>
        Toggle Error
      </Button>

     <br></br>
      <br></br>
      <br></br>
      <br></br>

      <CInput cHintText="This is Numeric Input Text" cType={"number"} />

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <CInput cHintText="This is Text Area" cRows={10} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <CInput cHintText="This is Search Input Text" cType={"search"} />

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <CCheckButton cLabel="This is check button default" isMultiple={true} />

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <CCheckButton
        cLabel="This is check button disabled"
        isMultiple={true}
        isDisabled={true}
      />

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <CCheckButton cLabel="This is radio button default" />

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <CCheckButton cLabel="This is radio button disabled" isDisabled={true} />

      <br></br>
      <br></br>
      <br></br>
      <br></br> */}

      {/* <CChooseFile /> 
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      */}

      {/* <CDropDown
        cHintText="DropDown Heading"
        cData={data}
        cErrorMsg={errorData[error]}
      />

      <br></br>

      <Button variant="contained" onClick={handleToggle}>
        Toggle Error
      </Button>

      <br></br>
      <br></br>
      <br></br>
      <br></br> 

      <CDateTimePicker />

      <br></br>
      <br></br>
      <br></br>
      <br></br> */}
      <Extra />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
