export const getBmi = (weight, height) => {
    let bmi = weight / (height * height);
    bmi = Math.round(bmi * 100) / 100;
    return bmi;
}

export const getIdealWeight = (bmi, height) => {
    let IdealWeight = (2.2 * bmi) + (3.5 * bmi) * (height - 1.5);
    IdealWeight = Math.round(IdealWeight * 100) / 100;
    return IdealWeight;
}

export const getBmr = (IdealWeight, height, age, gender) => {
    let bmr;
    if (gender === 'male') {
        bmr = 447.593 + (9.247 * IdealWeight) + (4.799 * height * 100) - (5.677 * age)
    }
    else {
        bmr = 447.593 + (9.247 * IdealWeight) + (3.098 * height * 100) - (4.330 * age)
    }
    if (bmr > 0) bmr = Math.round(bmr * 100) / 100;
    return bmr;
}

export const classificationAndRange = [
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

export const getBMIType = (value) => {
    if (value < 16) return 'v.s.u';
    else if (value > 16.0 && value <= 16.9) return 's.u';
    else if (value > 17.0 && value <= 18.4) return 'u';
    else if (value > 18.5 && value <= 24.9) return 'n';
    else if (value > 25.0 && value <= 29.9) return 'o';
    else if (value > 30.0 && value <= 34.9) return 'o1';
    else if (value > 35.0 && value <= 39.9) return 'o2';
    else if (value > 40) return 'o3';
};
