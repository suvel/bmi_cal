import React from 'react';
import SectionContainer from './SectionContainer';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const Row = ({ fVal, sVal, id, header, selectedVal }) => {
  return (
    <Stack
      sx={{ background: selectedVal == id ? '#454141' : 'transparent' }}
      direction={'row'}
      justifyContent='space-between'
      padding={'0 10px'}
    >
      <Box component='div'>{header ? <strong>{fVal}</strong> : fVal}</Box>
      <Box component='div'>{header ? <strong>{sVal}</strong> : sVal}</Box>
    </Stack>
  );
};

const classificationAndRange = [
  {
    header: true,
    key: 'classification',
    val: 'range',
  },
  {
    key: 'very several underweight',
    val: '<16',
    id: 'v.s.u',
  },
  {
    key: 'severely underweight',
    val: '16.0-16.9',
    id: 's.u',
  },
  {
    key: 'underweight',
    val: '17.0-18.4',
    id: 'u',
  },
  {
    key: 'normal',
    val: '18.5-24.9',
    id: 'n',
  },
  {
    key: 'overweight',
    val: '25.0-29.9',
    id: 'o',
  },
  {
    key: 'obese class 1',
    val: '30.0-34.9',
    id: 'o1',
  },
  {
    key: 'obese class 2',
    val: '35.0-39.9',
    id: 'o2',
  },
  {
    key: 'obese class 3',
    val: '>=40',
    id: 'o3',
  },
];

const getBMIType = (value) => {
  if (value < 16) return 'v.s.u';
  else if (value > 16.0 && value <= 16.9) return 's.u';
  else if (value > 17.0 && value <= 18.4) return 'u';
  else if (value > 18.5 && value <= 24.9) return 'n';
  else if (value > 25.0 && value <= 29.9) return 'o';
  else if (value > 30.0 && value <= 34.9) return 'o1';
  else if (value > 35.0 && value <= 39.9) return 'o2';
  else if (value > 40) return 'o3';
};

function ClassificationRage({ value }) {
  const heightItem = getBMIType(value);

  console.log({ heightItem });

  return (
    <SectionContainer>
      {classificationAndRange?.map((itm) => {
        return (
          <Row
            id={itm?.id}
            selectedVal={heightItem}
            fVal={itm?.key}
            sVal={itm?.val}
            header={itm?.header}
          />
        );
      })}
    </SectionContainer>
  );
}

export default ClassificationRage;
