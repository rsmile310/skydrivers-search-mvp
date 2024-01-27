import * as React from "react";
import SliderComponent from "../../components/slider/SliderComponent";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Stack, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

type props = {
  category: string;
  min: number;
  max: number;
  unit: string;
};

const SliderSection: React.FC<props> = ({ category, min, max, unit }) => {
  return (
    <Stack>
      <Typography>{category}</Typography>
      <Box sx={{display: 'flex'}}>
        <Typography sx={{mr: 1}}>{min}</Typography>
        <Typography sx={{mr: 1}}>-</Typography>
        <Typography sx={{mr: 1}}>{max}</Typography>
        <Typography sx={{mr: 1}}>{unit}</Typography>
      </Box>
      <SliderComponent min={min} max={max}></SliderComponent>
    </Stack>
  );
}

export default SliderSection;
