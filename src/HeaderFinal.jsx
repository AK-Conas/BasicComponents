import React, { useState } from "react";
import { styled } from "@mui/system";
import Box from "@mui/system/Box";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import ConasLogo from "./img1.jpg";
// import Drawer from "../main/Drawer";

const StyledHeader = styled("div")(({ theme, cHeaderClr }) => ({
  backgroundColor: "#002060",
  minHeight: "4em",
  width: "100%",
  display: "flex",
  alignItems: "center",
  padding: "0 20px", // Adjust padding to create space
  boxSizing: "border-box",
  overflowX: "hidden",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: "white",
  borderRadius: 0,
  marginLeft: "3em",
}));

const StyledPopoverContent = styled("div")({
  marginLeft: "-2px",
  padding: "10px",
  background: "#fff",
});

const StyledLogo = styled("img")({
  maxWidth: "100%", // Increase the maximum width as needed
  maxHeight: "100%", // Maintain aspect ratio
  height: "3em",
  width: "auto", // Allow width to adjust based on content
  marginLeft: "3em",
});

// const StyledDrawer = styled(Drawer)({
//   marginRight: "20px",
// });

const AvatarContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto", // Pushes Avatar to the right
});

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handlePopOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledHeader>
      <div>
        {/* <StyledDrawer /> */}

        <StyledLogo src={ConasLogo} alt="Conas Logo" />
      </div>
      <AvatarContainer>
        <StyledButton id="button1" onClick={(e) => handlePopOpen(e)}>
          <Avatar id="avatar2" style={{ width: "2.5em", height: "2.5em" }}>
            C
          </Avatar>
        </StyledButton>

        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <StyledPopoverContent>
            <Box id="box1">
              <Button id="btn1">
                <PersonIcon />
                Conas
              </Button>
            </Box>
            <Box id="box2">
              <Button id="btn2">
                <LogoutIcon />
                Logout
              </Button>
            </Box>
          </StyledPopoverContent>
        </Popover>
      </AvatarContainer>
    </StyledHeader>
  );
}

export default Header;
