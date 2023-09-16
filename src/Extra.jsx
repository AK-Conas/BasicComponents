import React from "react";
import { styled } from '@mui/material/styles';
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import Button from "@mui/material/Button";
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Slider from '@mui/material/Slider';

const primary = "#042560";
const secondary = "#3cb043";
const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  });
function Extra() {
  return (
    <div>
      <Fab variant="extended" color="primary">
        <NavigationIcon sx={{ mr: 1 }} />
        Icon Plus Text
      </Fab>

      <br />
      <br />
      <br />
      <br />
      <Button variant="outlined">Outlined</Button>
      <br />
      <br />
      <br />
      <br />

      <StyledRating
        name="customized-color"
        defaultValue={2}
        getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
{/* https://mui.com/material-ui/react-select/#checkmarks
https://mui.com/material-ui/react-select/#chip
 */}
 <br />
      <br />
      <br />
      <br />
<Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
      />
      
    </div>
  );
}

export default Extra;
