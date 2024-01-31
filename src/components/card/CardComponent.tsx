import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

type props = {
  title: string;
  location: string;
  country: string;
  desc: string;
};

const CardComponent: React.FC<props> = (props) => {
  return (
    <Card sx={{ display: 'flex', boxShadow: 4, mb: 3 }}>
      <Grid container sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }} >
        <Grid xs={12} md={7}>
          <Box sx={{ p: { xs: 0, sm: 2 } }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h5" sx={{ fontWeight: '900' }} >
                {props.title}
              </Typography>
              <Typography gutterBottom component="div" sx={{ mb: { xs: 2, sm: 3 } }}>
                {props.location}, {props.country}
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Typography variant="body1" color="text.secondary" mb={2}>
                  Conditions: Consistency, temperature, bottom,
                </Typography>
                <Typography variant="body1" >
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </Box>
              <Divider />
              <Stack direction="row" alignItems="center" my={1}>
                <Box sx={{ display: 'flex', mr: 1 }}>
                  <FlightTakeoffIcon />
                </Box>
                <Typography gutterBottom variant="body1" component="p" fontWeight='bold' mb={0}>
                  EZE &lt; &gt; LYO
                </Typography>
                <Typography gutterBottom variant="body1" component="p" mb={0}>
                  &nbsp;round trip flight
                </Typography>
              </Stack>
              <Divider sx={{ mb: 3 }} />
              <Grid container spacing={3}>
                <Grid xs>
                  <Typography variant='body1' component='p' fontWeight='bold'>The best</Typography>
                  <Typography variant='h6' component='h6' fontWeight='bolder'>1500 &euro;</Typography>
                  <Typography variant='body2' component='p' fontWeight='lighter' color="text.secondary">12h 20min</Typography>
                </Grid>
                <Grid xs>
                  <Typography variant='body1' component='p' fontWeight='bold'>The cheapest</Typography>
                  <Typography variant='h6' component='h6' fontWeight='bolder'>900 &euro;</Typography>
                  <Typography variant='body2' component='p' fontWeight='lighter' color="text.secondary">16h 20min</Typography>
                </Grid>
                <Grid xs>
                  <Typography variant='body1' component='p' fontWeight='bold'>The fastest</Typography>
                  <Typography variant='h6' component='h6' fontWeight='bolder'>1300 &euro;</Typography>
                  <Typography variant='body2' component='p' fontWeight='lighter' color="text.secondary">8h 20min</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Box>
        </Grid>
        <Grid xs={12} md={5} sx={{ height: { xs: "200px", sm: "300px", md: "100%" } }}>
          <Box component="img" sx={{ width: "100%", height: "100%", objectFit: "cover" }} src='./assets/images/card_img1.jpg' alt="image" />
        </Grid>
      </Grid>
    </Card>
  );
}

export default CardComponent;
