import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

import "./CheckboxComponent.css";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

type props = {
  item: string;
};

const CheckboxComponent: React.FC<props> = ({ item }) => {
  return (
    <div>
      <FormGroup>
        <FormControlLabel control={
          <Checkbox
            {...label}
            sx={{
              color: '#9c27b0',
              '&.Mui-checked': {
                color: '#9c27b0',
              },
            }}
          />
        } label={item}
          sx={{ '& .MuiFormControlLabel-label': { fontSize: '14px' } }} />
      </FormGroup>
    </div>
  );
}

export default CheckboxComponent;
