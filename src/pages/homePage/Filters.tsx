import Box from '@mui/material/Box';
import { Stack, Typography, Divider } from "@mui/material";
import SliderSection from "./SliderSection";
import CheckboxSection from "./CheckboxSection";

const checkboxes = [
  { category: "Consistency", types: ["Low", "Medium", "High"] },
  { category: "Quality", types: ["*", "* *", "* * *", "* * * *", "* * * * *"] },
  { category: "Region", types: ["Europe", "South America", "Africa", "South East Asia", "Central America"] },
  { category: "Country", types: ["France", "Argentina", "Kenia", "Vietnam", "Costa Rica"] },
];

const sliders = [
  { category: "Price", min: 400, max: 1400, unit: "€" },
  { category: "Distance", min: 400, max: 1400, unit: "km" },
  { category: "Water temperature", min: 10, max: 25, unit: "°C" },
];

function Filters() {
  return (
    <Box py={{ xs: 2, lg: 0 }}>
      <Box py={1} mb={3}>
        <Typography variant="body1" component='p' fontWeight="bold">Filters</Typography>
      </Box>
      <Stack divider={<Divider flexItem />} spacing={2}>
        {sliders?.map((item, index) => (
          <SliderSection key={index} category={item.category} min={item.min} max={item.max} unit={item.unit}></SliderSection>
        ))}
        {checkboxes?.map((item, index) => (
          <CheckboxSection key={index} category={item.category} types={item.types}></CheckboxSection>
        ))}
      </Stack>
    </Box>
  );
}

export default Filters;
