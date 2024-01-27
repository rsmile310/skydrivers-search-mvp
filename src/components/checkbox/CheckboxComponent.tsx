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
              color: pink[800],
              '&.Mui-checked': {
                color: pink[600],
              },
            }}
          />
        } label={item} />
      </FormGroup>
    </div>
  );
}

export default CheckboxComponent;
