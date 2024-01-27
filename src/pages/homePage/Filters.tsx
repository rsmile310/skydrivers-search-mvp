import * as React from "react";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Stack, Typography, Divider } from "@mui/material";
import SliderSection from "./SliderSection";
import CheckboxSection from "./CheckboxSection";

const checkboxes = [
  {category: "Consistency", types: ["Low", "Medium", "High"]},
  {category: "Quality", types: ["*", "* *", "* * *", "* * * *", "* * * * *"]},
  {category: "Region", types: ["Europe", "South America", "Africa", "South East Asia", "Central America"]},
  {category: "Country", types: ["France", "Argentina", "Kenia", "Vietnam", "Costa Rica"]},
];

const sliders = [
  {category: "Price", min: 400, max: 1400, unit: "€"},
  {category: "Distance", min: 400, max: 1400, unit: "km"},
  {category: "Water temperature", min: 10, max: 25, unit: "°C"},
];

function Filters() {
  return (
    <Box>
      <Typography fontWeight="bold">Filters</Typography>
      <Stack divider={<Divider flexItem />} spacing={2}>
        {sliders?.map((item) => (
        <SliderSection category={item.category} min={item.min} max={item.max} unit={item.unit}></SliderSection>
        ))}
        {checkboxes?.map((item) => (
        <CheckboxSection category={item.category} types={item.types}></CheckboxSection>
        ))}
      </Stack>
    </Box>
  );
}

export default Filters;
