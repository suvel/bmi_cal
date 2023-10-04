import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CalculateIcon from '@mui/icons-material/Calculate';
import SectionContainer from './SectionContainer';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const BMR = ({ calBMI }) => {
  const [form, setForm] = useState({
    height: null,
    weight: null,
    age: null,
    gender: null,
  });
  return (
    <SectionContainer>
      <Stack direction={'column'} gap={5}>
        <TextField
          type={'number'}
          value={form.height}
          onChange={(e) =>
            setForm((prevVal) => ({ ...prevVal, height: e.target.value }))
          }
          label='Height'
          variant='outlined'
        />
        <TextField
          type={'number'}
          value={form.weight}
          onChange={(e) =>
            setForm((prevVal) => ({ ...prevVal, weight: e.target.value }))
          }
          label='Weight'
          variant='outlined'
        />
        <Stack direction='row' justifyContent={'space-between'}>
          <TextField
            type={'number'}
            value={form.age}
            onChange={(e) =>
              setForm((prevVal) => ({ ...prevVal, age: e.target.value }))
            }
            label='Age'
            variant='outlined'
          />
          <ToggleButtonGroup
            color='primary'
            value={form.gender}
            exclusive
            onChange={(_, val) =>
              setForm((prevVal) => ({ ...prevVal, gender: val }))
            }
            aria-label='Gender'
          >
            <ToggleButton value='male'>Male</ToggleButton>
            <ToggleButton value='female'>Female</ToggleButton>
          </ToggleButtonGroup>
        </Stack>
        <Button
          onClick={() => calBMI(form)}
          size={'large'}
          variant='outlined'
          startIcon={<CalculateIcon />}
        >
          Calculate
        </Button>
      </Stack>
    </SectionContainer>
  );
};

export default BMR;
