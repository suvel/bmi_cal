import "./styles.css";
import BMR from "./BMR";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import BMIScale from './BMIScale';
import ClassificationRage from './ClassificationRage';
import { useState } from 'react';
import BMISuggestions from "./BMISuggestions";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme";
import { getIdealWeight, getBmi, getBmr } from './functions/helpers'

export default function App() {
  const [bmi, setBmi] = useState(0);
  const [bmr, setBmr] = useState(0);
  const [idealWeight, setIdealWeight] = useState(0);

  const updateBMIAndBMR = (val) => {
    let height = val?.height || 0;
    let weight = val?.weight || 0;
    let age = val?.age || 0;

    let bmi = getBmi(weight, height);
    let idealWeight = getIdealWeight(bmi, height);
    let bmr = getBmr(idealWeight, height, age, val?.gender);

    setBmi(bmi)
    setIdealWeight(idealWeight)
    setBmr(bmr)
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm" >
          <Stack padding={"30px"} gap={"15px"}>
            <BMR calBMI={updateBMIAndBMR} />
            <BMIScale value={bmi} />
            <ClassificationRage value={bmi} />
            <BMISuggestions idealWeight={idealWeight} bmi={bmi} bmr={bmr} />
          </Stack>
        </Container>
      </ThemeProvider>
    </div>
  );
}

