import * as React from "react";
import SliderComponent from "../../components/slider/SliderComponent";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Stack, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function SliderSection() {
  return (
    <Stack>
      <Typography>Price</Typography>
      <Box sx={{display: 'flex'}}>
        <Typography sx={{mr: 1}}>400</Typography>
        <Typography sx={{mr: 1}}>-</Typography>
        <Typography sx={{mr: 1}}>1400</Typography>
        <Typography sx={{mr: 1}}>&euro;</Typography>
      </Box>
      <SliderComponent></SliderComponent>
    </Stack>
  );
}

export default SliderSection;
