import CInput from "./CInput";
import CButton from "./CButton";
import CCheckButton from "./CCheckButton";
import CChooseFile from "./CChooseFile";
import CDropDown from "./CDropDown";
import CDateTimePicker from "./CDateTimePicker";
import Extra from "./Extra";
import CImportant from "./CImportant";
import CText from "./CText";
import CCard from "./CCard";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import { Card, CardContent, Typography } from "@mui/material";
import CGrid from "./CGrid";
import CUI from "./structure/CUI";
import CAvatar from "./CAvatar";
import CAlertToast from "./CAlertToast";
import CALT from "./CALT";
// import CarouselEffect from "./CarouselEffect";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Button from "@mui/material/Button";
const themeMain = createTheme({
  palette: {
    primary: {
      main: "#042560",
    },
    secondary: {
      main: "#3cb043",
    },
  },
});
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

  const cardData1 = [
    {
      title: "Card Header 1",
      detail: "Test 1",
    },
  ];
  const cardData2 = [
    {
      title: "Card Header 1",
      detail: "Test 1",
    },
    {
      title: "Card Header 2",
      detail: "Test 2",
    },
    {
      title: "Card Header 3",
      detail: "Test 3",
    },
  ];
  const cardData3 = [
    {
      title: "Card Header 1",
      detail: "Test 1",
      sub: "Sub 1",
    },
    {
      title: "Card Header 2",
      detail: "Test 2",
      sub: "Sub 2",
    },
    {
      title: "Card Header 3",
      detail: "Test 3",
      sub: "Sub 3",
    },
  ];

  const tabData = [
    {
      label: "Tab 1",
      content: "Tab 1 Content",
    },
    {
      label: "Tab 2",
      content: "Tab 2 Content",
    },
    {
      label: "Tab 3",
      content: "Tab 3 Content",
    },
  ];

  const [open, setOpen] = React.useState(false);

  const handleClickA = () => {
    setOpen(true);
  };

  const handleCloseA = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [cMessage, setCMessage] = React.useState(undefined);
  const [cOpen, setCOpen] = React.useState(false);
  const handleAlert = (message) => {
    setCMessage(message);
    setCOpen(true);
  };
  const handleAlertClose = () => {
    setCMessage(undefined);
    setCOpen(false);
  };
  return (
    <div className="App">
      <ThemeProvider theme={themeMain}>
        <h1>Hello CodeSandbox</h1>
        {/* <CGrid /> */}
        {/* 
      <CarouselEffect />*/}
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <CButton
          cText="Alert Message 1"
          cTooltipText="Default Button"
          cOnClick={() => handleAlert("Alert Message 1")}
        />
        {/* <Button variant="contained">Alert Message 1</Button> */}
        {cMessage !== undefined && (
          <CALT
            cMessage={cMessage}
            cOpen={cOpen}
            cType={"success"}
            handleAlertClose={handleAlertClose}
          />
        )}
        {/* <CALT cMessage={cMessage} /> */}
        {/* 
        open={open}
          autoHideDuration={6000}
          onClose={handleCloseA}
          message="Note archived"
          action={action}
        type=""
        onClose="" */}
        <CDateTimePicker />
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <CChooseFile cFileType="IMG" />
        <CAvatar />

        <CImportant />
        <br></br>
        <br></br>
        <br></br>
        <br></br>

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
          cDisabled={true}
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
          cDisabled={true}
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

        <CCheckButton
          cLabel="This is radio button disabled"
          isDisabled={true}
        />

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <CCheckButton />

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <CDropDown
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

        <CText cVariant="header_card" cText="Hello Header" />
        <CText cVariant="title_card" cText="Hello Title" />
        <CText cText="Hello Other" />

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <CCard c_data={cardData1} c_header="Header is here" />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <CCard c_data={cardData1} />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <CCard c_data={cardData2} />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <CCard c_data={cardData3} />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <CCard c_tabdata={tabData} />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {/* <VG>
        <CButton
          cText="Submit"
          cTooltipText="Default Button"
          cOnClick={handleClick}
        />
        <CButton
          cText="Cancel"
          cTooltipText="Default Button"
          cOnClick={handleClick}
        />
      </VG> */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        {/* <CUI /> */}
        {/* <Homepage /> */}
        <Extra />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </ThemeProvider>
    </div>
  );
}
