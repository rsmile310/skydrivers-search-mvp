import * as React from "react";
import { styled, Box, Stack, Typography, Tabs, Tab, Autocomplete, TextField } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { DateField } from '@mui/x-date-pickers/DateField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
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
  const [value, setValue] = React.useState(0);
  const [age, setAge] = React.useState('');
  const [date, setDate] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeLocation = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ p: 4, backgroundImage: 'linear-gradient(135deg, violet, blue, blue)' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography fontWeight="bold" color="white">SKYRIDERS</Typography>
        <Box sx={{display: 'flex'}}>
          <Typography sx={{px: 2}} color="white" fontSize="small">ABOUT</Typography>
          <Typography sx={{px: 2}} color="white" fontSize="small">CONTACT</Typography>
        </Box>
      </Stack>
      <StyledTabs
        value={value}
        onChange={handleChange}
        aria-label="styled tabs example"
      >
        <StyledTab label="SURF" />
        <StyledTab label="KITESURF" />
        <StyledTab label="SKI" />
      </StyledTabs>
      <Box sx={{display: 'flex'}}>
        <Stack>
          <Typography>From</Typography>
          <Box sx={{width: '350px'}}>
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              options={topFilms.map((option) => option.title)}
              renderInput={(params) => <TextField {...params} variant="outlined"/>}
            />
          </Box>
        </Stack>
        <Stack>
          <Typography>From</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{width: '350px'}}>
              <DateField
                value={date}
                onChange={(newDate) => setDate(newDate)}
                format="LL"
              />
            </Box>
          </LocalizationProvider>
        </Stack>
        <Stack>
          <Typography>From</Typography>
          <Box sx={{width: '350px'}}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChangeLocation}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Box>
        </Stack>
        <Stack>
          <Typography>From</Typography>
          <Box sx={{width: '350px'}}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChangeLocation}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

const topFilms = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
];

export default Header;
