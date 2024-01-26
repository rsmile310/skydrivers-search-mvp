import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { AccessAlarm } from '@mui/icons-material';

import "./CardComponent.css";
import { card } from "../../imageRouter";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

class CardComponent extends React.Component {
  render() {
    return (
      <Card sx={{ display: 'flex' }}>
        <Box sx={{ flexGrow: 1, p: 2 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid xs={12} sm={12} md={8}>
              <Item>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography gutterBottom component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Conditions: Consistency, temperature, bottom,
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
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
                      <Item>
                        <Typography>Best Flight</Typography>
                        <Typography>1300 &euro;</Typography>
                        <Typography>12h 20min</Typography>
                      </Item>
                    </Grid>
                    <Grid xs>
                      <Item>
                        <Typography>Best Flight</Typography>
                        <Typography>1300 &euro;</Typography>
                        <Typography>12h 20min</Typography>
                      </Item>
                    </Grid>
                    <Grid xs>
                      <Item>
                        <Typography>Best Flight</Typography>
                        <Typography>1300 &euro;</Typography>
                        <Typography>12h 20min</Typography>
                      </Item>
                    </Grid>
                  </Grid>
                </Box>
              </Item>
            </Grid>
            <Grid xs={12} sm={12} md={4}>
              <Item>
                <CardMedia
                  component="img"
                  alt="image"
                  image={card}
                />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Card>
    );
  }
}

export default CardComponent;
