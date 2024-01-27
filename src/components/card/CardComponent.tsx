import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { AccessAlarm } from '@mui/icons-material';

import "./CardComponent.css";
import { card } from "../../imageRouter";

type props = {
  title: string;
  location: string;
  country: string;
  conditions: string;
  desc: string;
  types: string[] | null;
};

const CardComponent: React.FC<props> = ({ title, location, country, conditions, desc, types }) => {
  return (
    <Card sx={{ display: 'flex', bgcolor: 'gray' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid xs={12} sm={12} md={8}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography gutterBottom component="div">
                  {location}, {country}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Conditions: Consistency, temperature, bottom,
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
                <Divider light />
                <Stack direction="row" alignItems="center">
                  <AccessAlarm></AccessAlarm>
                  <Typography gutterBottom variant="h5" component="div">
                    EZE &lt; &gt; LYO
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    round trip flight
                  </Typography>
                </Stack>
                <Divider light />
              </CardContent>
              <Grid container spacing={3}>
                <Grid xs>
                  <Typography>Best Flight</Typography>
                  <Typography>1300 &euro;</Typography>
                  <Typography>12h 20min</Typography>
                </Grid>
                <Grid xs>
                  <Typography>Best Flight</Typography>
                  <Typography>1300 &euro;</Typography>
                  <Typography>12h 20min</Typography>
                </Grid>
                <Grid xs>
                  <Typography>Best Flight</Typography>
                  <Typography>1300 &euro;</Typography>
                  <Typography>12h 20min</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid xs={12} sm={12} md={4}>
            <CardMedia
              component="img"
              alt="image"
              height="300"
              image={card}
            />
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

export default CardComponent;
