import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CText from "./CText";

const CCard = ({ cData, cHeader, cMedia, cMediaHeight, cTooltipText }) => {
  return (
    <Card aria-label={cTooltipText} variant="outlined">
      {cHeader !== undefined && (
        <CText cVariant="header_card" cText={cHeader} />
      )}
      {cData !== undefined &&
        cData.map((item, index) => (
          <CardContent key={index}>
            {item.title && <CText cVariant="title_card" cText={item.title} />}
            {item.detail && <CText cVariant="subtitle1" cText={item.detail} />}
            {item.sub && <CText cVariant="body2" cText={item.sub} />}
          </CardContent>
        ))}
      {cMedia !== undefined && (
        <CardMedia component="img" height={cMediaHeight} image={cMedia} />
      )}
    </Card>
  );
};
export default CCard;
