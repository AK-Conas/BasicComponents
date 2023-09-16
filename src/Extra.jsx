import React from "react";
import { styled } from '@mui/material/styles';
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import Button from "@mui/material/Button";
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

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

  const [alignment, setAlignment] = React.useState('web');

const handleChange = (event, newAlignment) => {
  setAlignment(newAlignment);
};
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
https://mui.com/material-ui/react-skeleton/
https://mui.com/material-ui/react-stepper/
https://mui.com/material-ui/react-stack/
https://mui.com/material-ui/react-timeline/
 */}
 <br />
      <br />
      <br />
      <br />
    <Slider
        aria-label="Temperature"
        defaultValue={30}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
      />
      <br />
      <br />
      <br />
      <br />

       <FormControlLabel control={<Switch defaultChecked />} label="Some Label" />
    
      <br />
      <br />
      <br />
      <br />
    
    
      <FormControl sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
        <br />
      <br />
      <br />
      <br />

        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
          <Input
            id="standard-adornment-weight"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
        </FormControl>

        <br />
      <br />
      <br />
      <br />

      <ToggleButtonGroup
  color="primary"
  value={alignment}
  exclusive
  onChange={handleChange}
  aria-label="Platform"
>
  <ToggleButton value="web">Web</ToggleButton>
  <ToggleButton value="android">Android</ToggleButton>
  <ToggleButton value="ios">iOS</ToggleButton>
</ToggleButtonGroup>

<br />
      <br />
      <br />
      <br />

    </div>
  );
}

export default Extra;
