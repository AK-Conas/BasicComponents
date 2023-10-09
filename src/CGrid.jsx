import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

const CGrid = ({ children, cVariant }) => {
  const cLength = children.length;
  if (cVariant === "Main_Container") {
    const mdL = 12 / cLength,
      smL = 6 / cLength;
    return (
      <Card sx={{ padding: "1.5em", margin: "1.5em" }}>
        <Grid container spacing={2} justifyContent="center">
          {children.map((child, index) => (
            <Grid item md={mdL} sm={smL} key={index}>
              {child}
            </Grid>
          ))}
        </Grid>
      </Card>
    );
  } else if (cVariant === "Horizontal_Container") {
    //Not working as expected
    return (
      <Grid container spacing={1} md={12} sx={{ xs: true }}>
        {children.map((child, index) => (
          <Grid
            item
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {child}
          </Grid>
        ))}
      </Grid>
    );
  } else {
    // Default Vertical_Container
    return (
      <Grid container spacing={1}>
        {children.map((child, index) => (
          <Grid
            item
            xs={12}
            md={12}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {child}
          </Grid>
        ))}
      </Grid>
    );
  }
};

export default CGrid;
