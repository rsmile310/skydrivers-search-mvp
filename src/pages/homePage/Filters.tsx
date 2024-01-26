import * as React from "react";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Stack, Typography } from "@mui/material";
import SliderSection from "./SliderSection";
import CheckboxSection from "./CheckboxSection";

function Filters() {
  return (
    <Box>
      <Typography fontWeight="bold">Filters</Typography>
      <SliderSection></SliderSection>
      <SliderSection></SliderSection>
      <SliderSection></SliderSection>
      <CheckboxSection></CheckboxSection>
      <CheckboxSection></CheckboxSection>
      <CheckboxSection></CheckboxSection>
      <CheckboxSection></CheckboxSection>
    </Box>
  );
}

export default Filters;
