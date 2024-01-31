import React, { FormEvent, SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { styled, Box, Stack, Grid, Typography, Tabs, Tab, Autocomplete, TextField, Button } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';
import InputAdornment from '@mui/material/InputAdornment';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import "./Header.css";



interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: SyntheticEvent, newValue: number) => void;
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
interface FormData {
  position: string;
  country: string;
  region: string;
  startDate: string;
  endDate: string;
}
type props = {
  skyType: number;
  onSkytypeChange: (event: React.SyntheticEvent, newValue: number) => void;
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

const Header: React.FC<props> = (props) => {

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

  const [formData, setFormData] = useState<FormData>({
    position: positionData[0],
    country: countryData[0],
    region: regionData[0],
    startDate: '',
    endDate: '',
  });

  const handleFormChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePositionChange = (
    event: React.SyntheticEvent,
    newValue: string | null,
  ) => {
    setFormData({ ...formData, position: newValue || '' });
  };
  const handleDateChange = (name: string) => (newValue: Dayjs | null) => {
    setFormData({ ...formData, [name]: newValue ? newValue.toISOString() : "" })
  }

  // search form submit
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData)
    // Endpoint where you want to send the form data
    const endpoint = `${process.env.REACT_APP_HOST_API_KEY}`;
    // Prepare the headers
    const headers = {
      'Content-Type': 'application/json',
      // Include other headers like authorization if necessary
    };
    // Prepare the body data
    const body = JSON.stringify(formData);
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: headers,
        body: body,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Success:', data);
      // Handle success - perhaps set a success message or redirect
    } catch (error) {
      console.error('Error during form submission:', error);

      // Handle errors - perhaps set an error message in your state and display it
    }
  };
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
          <Box sx={{ '& a': { fontWeight: 'bold', fontSize: "28px", textDecoration: 'none' } }}>
            <Link color="white" to="/" style={{ color: "white" }}>
              SKYRIDERS
            </Link>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ px: 2 }}>
              <Link color="white" to="/about" style={{ color: "white" }}>ABOUT</Link>
            </Box>
            <Box>
              <Link color="white" to="/contact" style={{ color: "white" }}>CONTACT</Link>
            </Box>
          </Box>
        </Stack>
        <Box>
          <StyledTabs
            value={props.skyType}
            onChange={props.onSkytypeChange}
            aria-label="styled tabs example"
            sx={{ mb: { xs: 0, md: 3 } }}
          >
            <StyledTab label="SURF" sx={{ minWidth: 'fit-content', mr: 3, fontSize: '22px', fontWeight: 'bold' }} />
            <StyledTab label="KITESURF" sx={{ minWidth: 'fit-content', mr: 3, fontSize: '22px', fontWeight: 'bold' }} />
            <StyledTab label="SKI" sx={{ minWidth: 'fit-content', fontSize: '22px', fontWeight: 'bold' }} />
          </StyledTabs>

          <Box component="form" method="post" onSubmit={handleSubmit}>
            <Stack flexDirection="row" sx={{ flexWrap: { xs: 'wrap', lg: 'nowrap' } }}>
              <Stack width="100%" mr={{ xs: 0, lg: 1 }} mt={3} sx={{
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
                          value={formData.position}
                          onChange={handlePositionChange}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              variant="outlined"
                              name="position"
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
                              <DatePicker
                                name="startDate"
                                onChange={handleDateChange("startDate")}
                              />
                            </DemoItem>
                            <DemoItem >
                              <DatePicker
                                name="endDate"
                                onChange={handleDateChange("endDate")} />
                            </DemoItem>
                          </Stack>
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
                          name="region"
                          id="demo-simple-select"
                          value={formData.region}
                          renderValue={() => {
                            return formData.region;
                          }}
                          onChange={handleFormChange}
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
                          name="country"
                          value={formData.country}
                          renderValue={() => {
                            return formData.country;
                          }}
                          onChange={handleFormChange}
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
              <Button type="submit" variant="contained" disableElevation
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
        </Box>
      </Stack >
    </Box >
  );
}

export default Header;
