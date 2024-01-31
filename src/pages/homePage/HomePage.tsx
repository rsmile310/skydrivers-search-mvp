import { useEffect, useState } from "react";
import "../../assets/styles/SharedStyles.css";
import CardComponent from "../../components/card/CardComponent";
import Filters from "./Filters";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Stack, Typography, IconButton } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { skyRidersData } from "../../config";

interface SkyRider {
  title: string;
  description: string;
  location: string;
  country: string;
  best_price: string;
  best_price_time: string;
  low_price: string;
  low_price_time: string;
  fast_price: string;
  fast_price_time: string;
}
type props = {
  skyType: number;
}
const HomePage: React.FC<props> = (props) => {
  const [value, setValue] = useState('Flight price');
  const [filterShow, setFilterShow] = useState(false);
  const [skyRiders, setSkyriders] = useState<any>([]);

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };



  useEffect(() => {
    if (props.skyType === 0)
      setSkyriders(skyRidersData.surf);
    else if (props.skyType === 1)
      setSkyriders(skyRidersData.kitesurf);
    else if (props.skyType === 2)
      setSkyriders(skyRidersData.ski);
  }, [props.skyType]);

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
        <Grid item xs={12} lg={9} pl={{ xs: 0, lg: 3 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={{ xs: 2, md: 3 }}>
            <Box display="flex" alignItems="center">
              <Box sx={{ display: 'flex', }}>
                <Typography fontWeight="bold" sx={{ mr: 1, fontSize: '18px' }}>130</Typography>
                <Typography fontWeight="bold" sx={{ fontSize: '18px' }}>destinations</Typography>
              </Box>
              <IconButton
                sx={{ zIndex: 1, display: { xs: 'flex', lg: 'none' } }}
                aria-label="filterIconBtn" color="secondary"
                onClick={() => { setFilterShow(true) }}>
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
          {skyRiders.map((ele: SkyRider, index: number) =>
            <CardComponent key={index} location={ele.location} country={ele.country} title={ele.title} desc={ele.description} />
          )}
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
