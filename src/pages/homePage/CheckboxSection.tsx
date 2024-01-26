import * as React from "react";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Divider, Stack, Typography } from "@mui/material";
import CheckboxComponent from "../../components/checkbox/CheckboxComponent";

function CheckboxSection() {
  return (
    <Stack>
      <Typography>Consistency</Typography>
      <CheckboxComponent></CheckboxComponent>
      <CheckboxComponent></CheckboxComponent>
      <CheckboxComponent></CheckboxComponent>
      <Divider></Divider>
    </Stack>
  );
}

export default CheckboxSection;
