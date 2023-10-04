import { Card, CardContent, Typography } from '@mui/material';
import SectionContainer from './SectionContainer';
import IdealWeight from './IdealWeight';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';

const BMISuggestions = ({ bmi, idealWeight, bmr }) => {
  const [activityType, setActivityType] = useState(1.2);

  let suggestions = '';
  let body2Content = '';

  const dailyCal = Math.round((bmr * activityType) * 100) / 100;

  if (bmi < 16) {
    suggestions = (
      <>
        <Typography variant='body1'>You are underweight.</Typography>
      </>
    );
    body2Content = (
      <ul>
        <li>
          {' '}
          <Typography variant='body2'>
            It's important to focus on a balanced diet that includes a variety
            of nutrient-rich foods. Incorporate lean proteins, whole grains,
            healthy fats, and plenty of fruits and vegetables.
          </Typography>
        </li>
        <li>
          <Typography variant='body2'>
            Additionally, consider incorporating strength-building exercises to
            help increase muscle mass in a safe and controlled manner.
          </Typography>
        </li>
        <li>
          <Typography variant='body2'>
            Ensure you're eating regular meals and snacks to provide your body
            with the necessary energy and nutrients.
          </Typography>
        </li>
      </ul>
    );
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    suggestions = (
      <>
        <Typography variant='body1'>You have a normal BMI.</Typography>
      </>
    );
    body2Content = (
      <ul>
        <li>
          {' '}
          <Typography variant='body2'>
            Continue with a balanced diet and regular exercise to maintain your
            current weight.
          </Typography>
        </li>
        <li>
          <Typography variant='body2'>
            Regular check-ups with a healthcare provider are important to
            monitor overall health.
          </Typography>
        </li>
        <li>
          <Typography variant='body2'>
            Make sure you're engaging in other healthy lifestyle practices such
            as getting regular exercise, managing stress, and getting adequate
            sleep.
          </Typography>
        </li>
      </ul>
    );
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    suggestions = (
      <>
        <Typography variant='body1'>You are overweight.</Typography>
      </>
    );
    body2Content = (
      <ul>
        <li>
          <Typography variant='body2'>
            Focus on making healthy food choices, controlling portion sizes, and
            avoiding excessive consumption of high-calorie, low-nutrient foods.
          </Typography>
        </li>
        <li>
          <Typography variant='body2'>
            Engage in regular physical activity, incorporating both
            cardiovascular exercises and strength training.
          </Typography>
        </li>
        <li>
          <Typography variant='body2'>
            If you're considering significant changes to your diet or exercise
            routine, or if you have specific health concerns, consult a
            healthcare provider.
          </Typography>
        </li>
      </ul>
    );
  } else if (bmi >= 30.0) {
    suggestions = (
      <>
        <Typography variant='body1'>You are obese.</Typography>
      </>
    );
    body2Content = (
      <ul>
        <li>
          {' '}
          <Typography variant='body2'>
            Consult a healthcare provider or a registered dietitian who can help
            create a personalized plan for weight management.
          </Typography>
        </li>
        <li>
          <Typography variant='body2'>
            Regular check-ups are important for monitoring health and managing
            any associated conditions.
          </Typography>
        </li>
        <li>
          <Typography variant='body2'>
            Implement sustainable lifestyle changes, including a balanced diet
            and regular exercise, is crucial.
          </Typography>
        </li>
        <li>
          <Typography variant='body2'>
            Consider joining a weight management program or seeking support from
            friends, family, or professionals.
          </Typography>
        </li>
      </ul>
    );
  }

  return (
    <SectionContainer className='suggestion'>
      <Typography variant='h6'>BMI Suggestions</Typography>
      {/* {suggestions} */}
      {body2Content}
      <FormControl sx={{paddingLeft:'40px'}}>
        <FormLabel id='demo-radio-buttons-group-label'>Activity Type</FormLabel>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          defaultValue='female'
          name='radio-buttons-group'
          value={activityType}
          onChange={(_, v) => setActivityType(v)}
        >
          <FormControlLabel
            value='1.2'
            control={<Radio />}
            label='little or no exercise'
          />
          <FormControlLabel
            value='1.375'
            control={<Radio />}
            label='light exercise/sports 1-3 days/week'
          />
          <FormControlLabel
            value='1.55'
            control={<Radio />}
            label='moderate exercise/sports 3-5 days/week'
          />
          <FormControlLabel
            value='1.72'
            control={<Radio />}
            label=' hard exercise/sports 6-7 days a week'
          />
          <FormControlLabel
            value='1.9'
            control={<Radio />}
            label='very hard exercise/sports, physical job, training twice a day'
          />
        </RadioGroup>
      </FormControl>
      <Divider />
      <IdealWeight value={idealWeight} dailyCal={dailyCal} />
    </SectionContainer>
  );
};

export default BMISuggestions;
