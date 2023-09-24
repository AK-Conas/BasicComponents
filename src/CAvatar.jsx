import React from "react";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import AssignmentIcon from "@mui/icons-material/Assignment";

const CAvatar = ({
  cText,
  cSrc,
  cSrcSimple,
  cTooltipText,
  cDisabled,
  cOnClick,
  cLink,
}) => {
  return (
    <div>
      <br /> <br />
      <Avatar sx={{ bgcolor: "#3cb043" }} variant="square">
        N
      </Avatar>
      <br /> <br />
      <Avatar sx={{ bgcolor: "#3cb043" }} variant="rounded">
        <AssignmentIcon />
      </Avatar>
      <br /> <br />
      <Avatar sx={{ bgcolor: "#3cb043" }}>A</Avatar>
      <br /> <br />
    </div>
  );
};

export default CAvatar;
