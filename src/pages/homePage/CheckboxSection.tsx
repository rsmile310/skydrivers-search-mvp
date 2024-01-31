import * as React from "react";
import { Stack, Typography } from "@mui/material";
import CheckboxComponent from "../../components/checkbox/CheckboxComponent";

type props = {
  category: string;
  types: string[] | null;
};

const CheckboxSection: React.FC<props> = ({ category, types }) => {
  return (
    <Stack>
      <Typography component='p' variant="body2" fontWeight='bold'>{category}</Typography>
      {types?.map((item, index) => (
        <CheckboxComponent key={index} item={item}></CheckboxComponent>
      ))}
    </Stack>
  );
}

export default CheckboxSection;
