import * as React from "react";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Stack, Typography, Divider } from "@mui/material";
import SliderSection from "./SliderSection";
import CheckboxSection from "./CheckboxSection";

function Filters() {
  return (
    <Box>
      <Typography fontWeight="bold">Filters</Typography>
      <Stack divider={<Divider flexItem />} spacing={2}>
        <SliderSection></SliderSection>
        <SliderSection></SliderSection>
        <SliderSection></SliderSection>
        <CheckboxSection></CheckboxSection>
        <CheckboxSection></CheckboxSection>
        <CheckboxSection></CheckboxSection>
        <CheckboxSection></CheckboxSection>
      </Stack>
    </Box>
  );
}

export default Filters;
