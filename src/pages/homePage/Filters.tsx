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

function Filters() {
  return (
    <Box>
      <Typography fontWeight="bold">Filters</Typography>
      <Stack divider={<Divider flexItem />} spacing={2}>
        <SliderSection></SliderSection>
        <SliderSection></SliderSection>
        <SliderSection></SliderSection>
        {checkboxes?.map((item) => (
        <CheckboxSection category={item.category} types={item.types}></CheckboxSection>
        ))}
      </Stack>
    </Box>
  );
}

export default Filters;
