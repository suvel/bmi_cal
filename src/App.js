import "./styles.css";
import BMR from "./BMR";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import BMIScale from './BMIScale'
import ClassificationRage from './ClassificationRage'
import IdealWeight from './IdealWeight'
import { useState } from 'react'
import BMISuggestions from "./BMISuggestions";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme";

export default function App() {
  const [bmi, setBMI] = useState(0);
  const [bmr, setBMR] = useState(0);
  const [idealWeight, setIdealWeight] = useState(0);

  const updateBMI = (val) => {
    let height = val?.height || 0;
    let weight = val?.weight || 0;
    let age = val?.age || 0;

    // let bmr = 66.5 + (13.75 * weight) + (5 * height) - (6.755 * age)
    // bmr = Math.round(bmr)

    let bmi = weight / (height * height);
    bmi = Math.round(bmi * 100) / 100;

    let IdealWeight = (2.2 * bmi) + (3.5 * bmi) * (height - 1.5);
    IdealWeight = Math.round(IdealWeight * 100) / 100;

    let bmr;
    if (val.gender === 'male') {
      bmr = 447.593 + (9.247 * IdealWeight) + (4.799 * height * 100) - (5.677 * age)
    }
    else {
      bmr = 447.593 + (9.247 * IdealWeight) + (3.098 * height * 100) - (4.330 * age)
    }
    if (bmr > 0) bmr = Math.round(bmr * 100) / 100;
    setBMI(bmi)
    setIdealWeight(IdealWeight)
    setBMR(bmr)
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm" >
          <Stack padding={"30px"} gap={"15px"}>
            <BMR calBMI={updateBMI} />
            <BMIScale value={bmi} />
            <ClassificationRage value={bmi} />
            <BMISuggestions idealWeight={idealWeight} bmi={bmi} bmr={bmr} />
          </Stack>
        </Container>
      </ThemeProvider>
    </div>
  );
}

