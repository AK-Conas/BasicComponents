import React from "react";
import Grid from "@mui/material/Grid";
import CFilterItem from "./CFilterItem";

const CFilterGroup = ({
  cHeaders,
  cData,
  cSingle,
  cShowSearch,
  cShowDelete,
  cTooltipText,
}) => {
  return (
    <Grid container justifyContent="center">
      <CFilterItem cHeader="Filter Serach Header" cData={cData} />
      <CFilterItem cHeader="Filter Serach Header" cData={cData} />
      <CFilterItem cHeader="Filter Serach Header" cData={cData} />
      <CFilterItem cHeader="Filter Serach Header" cData={cData} />
    </Grid>
  );
};

export default CFilterGroup;
