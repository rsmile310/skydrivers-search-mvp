import * as React from "react";
import "../../assets/styles/SharedStyles.css";
import CardComponent from "../../components/card/CardComponent";
import Filters from "./Filters";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Stack, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function HomePage() {
  const [value, setValue] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <div className="page">
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={0} sm={2} md={4}>
            <Item>
              <Filters></Filters>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <Item>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Box sx={{display: 'flex'}}>
                  <Typography fontWeight="bold" sx={{mr: 1}}>130</Typography>
                  <Typography fontWeight="bold" sx={{mr: 1}}>destinations</Typography>
                </Box>
                <Box sx={{display: 'flex'}}>
                  <Typography sx={{px: 2}} fontSize="small">Sort by</Typography>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </Box>
              </Stack>
            </Item>
            <Item>
              <CardComponent></CardComponent>
            </Item>
            <Item>
              <CardComponent></CardComponent>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default HomePage;
