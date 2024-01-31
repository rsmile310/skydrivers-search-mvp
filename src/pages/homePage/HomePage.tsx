import * as React from "react";
import "../../assets/styles/SharedStyles.css";
import CardComponent from "../../components/card/CardComponent";
import Filters from "./Filters";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Stack, Typography, IconButton } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function HomePage() {
  const [value, setValue] = React.useState('Flight price');
  const [filterShow, setFilterShow] = React.useState(false)

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <Box className="page" sx={{ maxWidth: "1400px", mx: "auto", py: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
      <Grid container >
        <Grid
          className="scrollbar"
          item lg={3}
          pl={{ xs: 2, lg: 0 }}
          pr={{ xs: 3, lg: 5 }}
          sx={{
            width: '100%',
            maxWidth: '280px',
            backgroundColor: '#fff',
            position: { xs: 'fixed', lg: 'initial' },
            top: 0,
            left: `${!filterShow ? '-100%' : '0'}`,
            height: { xs: '100vh', lg: 'auto' },
            overflowY: "auto",
            zIndex: '12',
            transition: 'left ease .6s'
          }}>
          <Filters></Filters>
        </Grid>
        <Grid item xs={12} lg={9}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={{ xs: 2, md: 3 }}>
            <Box display="flex" alignItems="center">
              <Box sx={{ display: 'flex', }}>
                <Typography fontWeight="bold" sx={{ mr: 1, fontSize: '18px' }}>130</Typography>
                <Typography fontWeight="bold" sx={{ fontSize: '18px' }}>destinations</Typography>
              </Box>
              <IconButton sx={{ zIndex: 1 }} aria-label="filterIconBtn" color="secondary" onClick={() => { setFilterShow(true) }}>
                <FilterAltIcon />
              </IconButton>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ px: 2 }} variant="body2" component="p" >Sort by</Typography>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                renderValue={() => {
                  return value;
                }}
                value={value}
                onChange={handleChange}
                sx={{ '& .MuiSelect-select': { py: 1 }, '& fieldset': { borderColor: "rgba(0, 0, 0, 0.23) !important" } }}
              >
                <MenuItem value='Flight price'>Flight price</MenuItem>
                <MenuItem value='Flight distance'>Flight distance</MenuItem>
                <MenuItem value='Consistency'>Consistency</MenuItem>
              </Select>
            </Box>
          </Stack>
          <CardComponent title="The channel" location="Normandy" country="France" conditions="" desc="" types={[]}></CardComponent>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: `${filterShow ? 'block' : 'none'}`,
          position: 'fixed',
          left: '0', top: '0',
          width: '100%', height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.5)'
        }}
        onClick={() => { setFilterShow(false) }}
      />
    </Box >
  );
}

export default HomePage;
