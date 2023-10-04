import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import SectionContainer from './SectionContainer';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const IdealWeight = ({ value, dailyCal }) => {
  return (
    <SectionContainer>
      <Stack direction='row' justifyContent={'space-between'}>
        <Box>
          <strong>Ideal Weight</strong>
        </Box>
        <Box>{value}</Box>
      </Stack>
      <Stack direction='row' justifyContent={'space-between'}>
        <Box>
          <strong>Ideal Calories</strong>
        </Box>
        <Box>{dailyCal}</Box>
      </Stack>
    </SectionContainer>
  );
};

export default IdealWeight;
