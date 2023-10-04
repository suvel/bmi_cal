import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import SectionContainer from './SectionContainer';

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
