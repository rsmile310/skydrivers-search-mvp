import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';

import "./CardComponent.css";
import { card } from "../../imageRouter";
class CardComponent extends React.Component {
  render() {
    return (
      <Card>
      <CardMedia
        component="img"
        alt="image"
        height="140"
        image={card}
      />
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
      </CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <AccessAlarm></AccessAlarm>
        <ThreeDRotation></ThreeDRotation>
      </Box>
    </Card>
      );
  }
}

export default CardComponent;
