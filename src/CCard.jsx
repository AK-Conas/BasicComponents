import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CText from "./CText";

function CCard({ c_data, c_header }) {
  return (
    <Card>
      {c_header !== undefined && (
        <CText cVariant="header_card" cText={c_header} />
      )}
      {c_data !== undefined &&
        c_data.map((item, index) => (
          <CardContent key={index}>
            {item.title && <CText cVariant="title_card" cText={item.title} />}
            {item.detail && <CText cVariant="subtitle1" cText={item.detail} />}
            {item.sub && <CText cVariant="body2" cText={item.sub} />}
          </CardContent>
        ))}
    </Card>
  );
}
export default CCard;
