import "./styles.css";
import CInput from "./CInput";
import CButton from "./CButton";
import CCheckButton from "./CCheckButton";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";

export default function App() {
  const handleClick = () => {
    // Handle button click here
    console.log("is this working App.js");
  };

  // State variable to track the error state of the TextField
  const [error, setError] = useState(false);

  // Function to toggle the error state
  const handleToggle = () => {
    setError(!error);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <CButton
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

      {/* <CCButton
        cText="This is Conas Custom Disabled Button with text only"
        c_disabled={true}
        cTooltipText="Disabled Button"
        cOnClick={handleClick}
      />
       <br></br><br></br><br></br><br></br> */}
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

      {/* Both text and image check later todo. rest button all done */}

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
        cError={error}
        cErrorMsg="This is an error message"
      />
      <CButton variant="contained" onClick={handleToggle}>
        Toggle Error
      </CButton>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <CInput cHintText="This is Numeric Input Text" cType={1} />

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <CInput cHintText="This is Text Area" isNumeric={true} cRows={10} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <CInput cHintText="This is Search Input Text" cType={2} />

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
      <br></br>
    </div>
  );
}
