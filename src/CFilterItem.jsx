import React from "react";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import CCheckGroup from "./CCheckGroup";
import CInput from "./CInput";

const resetTooltipText = "Reset Filter";
let tColor = "white";
let cVariant = "h6";

const CFilterItem = ({
  cHeader,
  cData,
  cSingle,
  cShowSearch,
  cShowDelete,
  cTooltipText,
}) => {
  const handleResetClick = (e) => {};
  if (cShowDelete === undefined) {
    cShowDelete = true;
  }
  if (cShowSearch === undefined) {
    cShowSearch = true;
  }
  return (
    <Card aria-label={cTooltipText} variant="outlined">
      {cHeader !== undefined && (
        <Box bgcolor="secondary.main" padding={"1em"}>
          <Typography
            variant={cVariant}
            color={tColor}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            {cHeader}
            {cShowDelete && (
              <Tooltip title={resetTooltipText} arrow>
                <IconButton
                  aria-label={resetTooltipText}
                  onClick={handleResetClick}
                >
                  <DeleteForeverIcon style={{ color: tColor }} />
                </IconButton>
              </Tooltip>
            )}
          </Typography>
        </Box>
      )}
      {cShowSearch && (
        <CInput cHintText="Search" cType={"search"} cVariant={"filled"} />
      )}
      {cData !== undefined && <CCheckGroup cData={cData} cSingle={cSingle} />}
    </Card>
  );
};
export default CFilterItem;
