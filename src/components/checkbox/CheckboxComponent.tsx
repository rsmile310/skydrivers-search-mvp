import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

import "./CheckboxComponent.css";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

class CheckboxComponent extends React.Component {
  render() {
    return (
      <div>
        <FormGroup>
          <FormControlLabel control={
            <Checkbox
              {...label}
              defaultChecked
              sx={{
                color: pink[800],
                '&.Mui-checked': {
                  color: pink[600],
                },
              }}
            />
          } label="xxx" />
        </FormGroup>
      </div>
    );
  }
}

export default CheckboxComponent;
