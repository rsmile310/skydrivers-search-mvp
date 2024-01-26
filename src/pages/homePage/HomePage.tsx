import * as React from "react";
import "../../assets/styles/SharedStyles.css";
import CardComponent from "../../components/card/CardComponent";
import SliderComponent from "../../components/slider/SliderComponent";
import CheckboxComponent from "../../components/checkbox/CheckboxComponent";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

class HomePage extends React.Component {
  render() {
    return (
      <div className="page">
        <Box sx={{ flexGrow: 1, p: 2 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={0} sm={2} md={4}>
              <Item>
                <SliderComponent></SliderComponent>
                <CheckboxComponent></CheckboxComponent>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <Item>
                <CardComponent></CardComponent>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default HomePage;
