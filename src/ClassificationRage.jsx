import React from 'react';
import SectionContainer from './SectionContainer';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { classificationAndRange, getBMIType } from './functions/helpers';

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

function ClassificationRage({ value }) {
  const heightItem = getBMIType(value);

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
