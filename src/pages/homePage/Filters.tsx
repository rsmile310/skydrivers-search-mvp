import * as React from "react";
import "../../assets/styles/SharedStyles.css";
import SliderComponent from "../../components/slider/SliderComponent";
import CheckboxComponent from "../../components/checkbox/CheckboxComponent";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Stack, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function Filters() {
  return (
    <div>
      <SliderComponent></SliderComponent>
      <CheckboxComponent></CheckboxComponent>
    </div>
  );
}

export default Filters;
