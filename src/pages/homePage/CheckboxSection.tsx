import * as React from "react";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Stack, Typography } from "@mui/material";
import CheckboxComponent from "../../components/checkbox/CheckboxComponent";

type props = {
  category: string;
  types: string[] | null;
};

const CheckboxSection: React.FC<props> = ({ category, types }) => {
  return (
    <Stack>
      <Typography>{category}</Typography>
      {types?.map((item) => (
        <CheckboxComponent item={item}></CheckboxComponent>
      ))}
    </Stack>
  );
}

export default CheckboxSection;
