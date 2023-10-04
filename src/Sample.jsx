import { createTheme, ThemeProvider } from "@mui/material/styles";
import CInput from "./CInput";
import CButton from "./CButton";
import CCheckButton from "./CCheckButton";
import CChooseFile from "./CChooseFile";
import CDropDown from "./CDropDown";
import CDateTimePicker from "./CDateTimePicker";
import Extra from "./Extra";
import CImportant from "./CImportant";
import CCarousel from "./CCarousel";
import CFilterGroup from "./CFilterGroup";
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
import CToast from "./CToast";
import CButtonGroup from "./CButtonGroup";
import Header from "./HeaderFinal";
import CBackDrop from "./CBackdrop";

import Button from "@mui/material/Button";

const themeMain = createTheme({
  palette: {
    primary: {
      main: "#042560",
    },
    secondary: {
      main: "#3CB043",
    },
  },
});
export default function Sample() {
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
  const [cType, setCType] = React.useState(false);
  const handleAlert = (message, type) => {
    setCMessage(message);
    setCOpen(true);
    setCType(type);
  };
  const handleAlertClose = () => {
    setCMessage(undefined);
    setCOpen(false);
    setCType(undefined);
  };
  const productData = [
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "iWatch",
    },
    {
      id: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1610824352934-c10d87b700cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Water Bottle",
    },
    {
      id: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Vans sneakers",
    },
    {
      id: 4,
      imageUrl:
        "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Coco Noir",
    },
    {
      id: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "Snikkers",
    },
  ];
  const filterData1 = [
    { label: "Option 1", value: "option1", isDisabled: true },
    { label: "Opion 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  // const createData=>(name, calories, fat, carbs, protein) {
  //   return { name, calories, fat, carbs, protein };
  // }

  const gridData = [
    [
      {
        value: "Frozen yoghurt",
      },
      {
        value: 159,
      },
      {
        value: 6.0,
      },
      {
        value: 24,
      },
      {
        value: 4.0,
      },
    ],
    [
      {
        value: "Ice cream sandwich",
      },
      {
        value: 159,
      },
      {
        value: 6.0,
      },
      {
        value: 24,
      },
      {
        value: 4.0,
      },
    ],
    [
      {
        value: "Eclair",
      },
      {
        value: 159,
      },
      {
        value: 6.0,
      },
      {
        value: 24,
      },
      {
        value: 4.0,
      },
    ],
    [
      {
        value: "Cupcake",
      },
      {
        value: 159,
      },
      {
        value: 6.0,
      },
      {
        value: 24,
      },
      {
        value: 4.0,
      },
    ],
    [
      {
        value: "Gingerbread",
      },
      {
        value: 159,
      },
      {
        value: 6.0,
      },
      {
        value: 24,
      },
      {
        value: 4.0,
      },
    ],
    [
      {
        value: "Donuts",
      },
      {
        value: 159,
      },
      {
        value: 6.0,
      },
      {
        value: 24,
      },
      {
        value: 4.0,
      },
    ],
  ];
  const gridHeadData = [
    "Dessert (100g serving)",
    "Calories",
    "Fat (g)",
    "Carbs (g)",
    "Protein (g)",
  ];

  // const [cOpen1, setCOpen1] = React.useState(false);

  const [cCarousel, setCCarousel] = React.useState(false);

  // const handleOpen = () => {
  //   setCOpen1(true);
  // };
  // const handleClose = () => {
  //   setCOpen1(false);
  // };

  // Function to open the dialog with specified scroll behavior
  const handleCarouselOpen = () => () => {
    // setOpen1(true);
    // setScroll(scrollType);
    setCCarousel(true);
  };

  return (
    <div className="App">
      <ThemeProvider theme={themeMain}>
        <h1>Hello CodeSandbox</h1>

        <Button
          onClick={handleCarouselOpen()}
          style={{
            backgroundColor: "blue",
          }}
        >
          View Image
        </Button>

        {cCarousel === true && (
          <CCarousel
            cOpen={cCarousel}
            cHeader={"Material Images"}
            cProductData={productData}
          />
        )}
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        {/* <Button onClick={handleOpen}>Show backdrop</Button>
        <CBackDrop cOpen={cOpen1} cHandleClose={handleClose} /> */}

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <CButtonGroup />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <CGrid cGridData={gridData} cHeaderData={gridHeadData} />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {/* 
      <CarouselEffect />*/}
        <CFilterGroup
          cHeader="Filter Serach Header"
          cData={filterData1}
          cSingle={false}
        />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {/* <CCarousel cProduct={productData} /> */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <CButton
          cText="Alert Message 1"
          cTooltipText="Default Button"
          cOnClick={() => handleAlert("Alert Message 1", "success")}
        />
        <CButton
          cText="Alert Message 2"
          cTooltipText="Default Button"
          cOnClick={() => handleAlert("Alert Message 2", "error")}
        />
        {cMessage !== undefined && (
          <CToast
            cMessage={cMessage}
            cOpen={cOpen}
            cType={cType}
            cHandleAlertClose={handleAlertClose}
          />
        )}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <CDateTimePicker />
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <CChooseFile cFileType="IMG" />

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        {/* <CAvatar /> */}

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        {/* <CImportant /> */}
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

        <CCheckButton cLabel="This is check button default" />

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <CCheckButton cLabel="This is check button disabled" cDisabled={true} />

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <CCheckButton cLabel="This is radio button default" cSingle={true} />

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <CCheckButton
          cLabel="This is radio button disabled"
          cSingle={true}
          cDisabled={true}
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
        <CCard cData={cardData1} cHeader="Header is here" />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <CCard cData={cardData1} />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <CCard cData={cardData2} />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <CCard cData={cardData3} />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <CCard cTabdata={tabData} />
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
        {/* <Extra /> */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </ThemeProvider>
    </div>
  );
}
