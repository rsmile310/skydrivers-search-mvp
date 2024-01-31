import * as React from "react";
import SliderComponent from "../../components/slider/SliderComponent";
import Box from '@mui/material/Box';
import { Stack, Typography } from "@mui/material";

type props = {
  category: string;
  min: number;
  max: number;
  unit: string;
};

const SliderSection: React.FC<props> = ({ category, min, max, unit }) => {
  return (
    <Stack>
      <Typography variant="body2" fontWeight='bold'>{category}</Typography>
      <Box sx={{ display: 'flex' }}>
        <Typography sx={{ mr: 1, opacity: '0.7' }} variant="body2">{min}</Typography>
        <Typography sx={{ mr: 1, opacity: '0.7' }} variant="body2">-</Typography>
        <Typography sx={{ mr: 1, opacity: '0.7' }} variant="body2">{max}</Typography>
        <Typography sx={{ mr: 1, opacity: '0.7' }} variant="body2">{unit}</Typography>
      </Box>
      <SliderComponent min={min} max={max}></SliderComponent>
    </Stack>
  );
}

export default SliderSection;
