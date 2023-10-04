import * as React from 'react';
import SectionContainer from './SectionContainer';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

const marks = [
  {
    value: 18,
    // label: 'U.W',
  },
  {
    value: 25,
    // label: 'Hlt',
  },
  {
    value: 30,
    // label: 'O.W',
  },
  {
    value: 40,
    // label: 'Obs',
  },
  {
    value: 45,
    // label: 'EX.Obs',
  },
];

const BMIScale = ({ value }) => {
  return (
    <SectionContainer>
      <Typography variant='h4'>
        BMI
      </Typography>
      <Slider
        valueLabelDisplay='on'
        track={false}
        aria-labelledby='track-false-slider'
        value={value}
        marks={marks}
        min={12}
        max={45}
        size='medium'
      />
    </SectionContainer>
  );
};

export default BMIScale;
