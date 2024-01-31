import * as React from "react";
import { styled, Box, Stack, Grid, Typography, Tabs, Tab, Autocomplete, TextField, Button, Paper } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { DateField } from '@mui/x-date-pickers/DateField';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputAdornment from '@mui/material/InputAdornment';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import "./Header.css";


interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: 'skyblue',
  },
});

interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  padding: 0,
  color: 'rgba(255, 255, 255, 0.2)',
  '&.Mui-selected': {
    color: '#fff',
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'rgba(100, 95, 228, 0.32)',
  },
}));

function Header() {
  const positionData = [
    'New Delhi Airport, India',
    'London Heathrow Airport , London',
    'Hong Kong Airport, Honkong',
    'Dulles Airport, Washington',
  ];
  const regionData: string[] = [
    'Any', 'New Delhi', 'London', 'Hong Kong', 'Woshington', 'Paris', 'Berlin', 'Tokyo'
  ];
  const countryData: string[] = [
    'Any', 'India', 'United Kingdom', 'Hong Kong', 'United States', 'France', 'Germany', 'Japan'
  ];

  const [value, setValue] = React.useState(0);
  const [region, setRegion] = React.useState(regionData[0]);
  const [country, setCountry] = React.useState(countryData[0]);
  const [position, setPosition] = React.useState(positionData[0]);
  // const [date, setDate] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeRegion = (event: SelectChangeEvent) => {
    setRegion(event.target.value as string);
  };

  const handleChangeCountry = (event: SelectChangeEvent) => {
    setCountry(event.target.value as string);
  };

  const handlePostionChange = (event: React.SyntheticEvent, newValue: string) => {
    setPosition(newValue);
  };

  // const handlePostionInputChange = (event, newInputValue) => {
  //   setInputValue(newInputValue);
  // };

  return (
    <Box sx={{
      backgroundImage: 'linear-gradient(135deg, #33004A, #0E0958)',
      px: { xs: 2, md: 4 },
      pb: 4,
      '& .MuiTabs-indicatorSpan': {
        backgroundColor: '#00C6EE !important'
      }
    }}>
      <Stack sx={{ maxWidth: "1400px", mx: "auto" }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" py={4}>
          <Typography fontWeight="bold" color="white" variant="h5" component="h5">SKYRIDERS</Typography>
          <Box sx={{ display: 'flex' }}>
            <Typography sx={{ px: 2 }} color="white" fontSize="small">ABOUT</Typography>
            <Typography sx={{ px: 2 }} color="white" fontSize="small">CONTACT</Typography>
          </Box>
        </Stack>
        <Box>
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="styled tabs example"
            sx={{ mb: { xs: 0, md: 3 } }}
          >
            <StyledTab label="SURF" sx={{ minWidth: 'fit-content', mr: 3, fontSize: '22px', fontWeight: 'bold' }} />
            <StyledTab label="KITESURF" sx={{ minWidth: 'fit-content', mr: 3, fontSize: '22px', fontWeight: 'bold' }} />
            <StyledTab label="SKI" sx={{ minWidth: 'fit-content', fontSize: '22px', fontWeight: 'bold' }} />
          </StyledTabs>
          <Stack flexDirection="row" sx={{ flexWrap: { xs: 'wrap', lg: 'nowrap' } }}>
            <Stack width="100%" mr={1} mt={3} sx={{
              mb: { xs: 2, lg: 0 },
              '& .MuiOutlinedInput-root': { backgroundColor: '#fff', borderRadius: '4px' },
              '& fieldset': { border: 'none !important' },

            }}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6} lg={4} >
                  <Stack>
                    <Typography variant="body2" component='p' color='white' mb={1}>From</Typography>
                    <Box>
                      <Autocomplete
                        id="free-solo-demo"
                        freeSolo
                        options={positionData}
                        value={position}
                        onChange={() => handlePostionChange}
                        inputValue={position}
                        onInputChange={handlePostionChange}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="outlined"
                            InputProps={{
                              ...params.InputProps,
                              startAdornment: (
                                <InputAdornment position="start">
                                  <FlightTakeoffIcon />
                                </InputAdornment>
                              ),
                            }}
                          />
                        )}
                      />
                    </Box>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} sx={{
                  mb: { xs: 1, lg: 0 }
                }}>
                  <Stack sx={{
                    mt: "20px",
                  }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
                        <Stack flexDirection="row" sx={{ backgroundColor: 'white', borderRadius: "4px" }} >
                          <DemoItem>
                            <DatePicker />
                          </DemoItem>
                          <DemoItem >
                            <DatePicker />
                          </DemoItem>
                        </Stack>
                        {/* <DemoItem label="Validation: uses the day of `maxDate`">
                  <DatePicker maxDate={dayjs('2022-04-17')} />
                </DemoItem> */}
                      </DemoContainer>
                    </LocalizationProvider>
                  </Stack>
                </Grid>
                <Grid item xs={6} lg={2}>
                  <Stack>
                    <Typography variant="body2" component="p" color="white" mb={1}>Prefered region</Typography>
                    <Box>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={region}
                        renderValue={() => {
                          return region;
                        }}
                        onChange={handleChangeRegion}
                        sx={{ width: "100%" }}
                      >
                        {regionData.map((item, index) =>
                          <MenuItem key={index} value={item}>{item}</MenuItem>
                        )}
                      </Select>
                    </Box>
                  </Stack>
                </Grid>
                <Grid item xs={6} lg={2}>
                  <Stack>
                    <Typography variant="body2" component="p" color="white" mb={1}>Prefered country</Typography>
                    <Box>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={country}
                        renderValue={() => {
                          return country;
                        }}
                        onChange={handleChangeCountry}
                        sx={{ width: "100%" }}
                      >
                        {countryData.map((item, index) =>
                          <MenuItem key={index} value={item}>{item}</MenuItem>
                        )}
                      </Select>
                    </Box>
                  </Stack>
                </Grid>
              </ Grid>
            </Stack>
            <Button variant="contained" disableElevation
              sx={{
                width: '150px', height: '56px',
                mx: 'auto',
                mt: 'auto',
                backgroundColor: "#00C6EE!important",
                fontWeight: 'bold'
              }}>
              Search
            </Button>
          </Stack>
        </Box>

      </Stack>
    </Box >
  );
}



export default Header;
