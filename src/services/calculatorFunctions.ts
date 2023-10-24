// convert ft to in considering the height entered is in ft
export const convertHeight = (ftValue: number) => {
  return ftValue * 12;
};
// convert st to lbs considering the weight entered is in st
export const convertWeight = (stValue: number) => {
  return stValue * 14;
};
// calculate metric bmi
const calculateMetric = (height: number, weight: number) => {
  let heightNumber = /[0-9]/g.test(height.toString());
  let weightNumber = /[0-9]/g.test(height.toString());
  if (heightNumber && weightNumber) {
    if (height !== 0 && weight !== 0) {
      let meter = height / 100;
      let BMI = (weight / (meter * meter)).toFixed(1);
      return parseFloat(BMI);
    }
  }
};
// calculate imperial bmi
const calculateImperial = (height: number, weight: number) => {
  if (height !== 0 && weight !== 0) {
    let cm = height * 30.48;
    let meter = cm / 100;
    let kg = weight * 6.35;
    let BMI = (kg / (meter * meter)).toFixed(1);
    return parseFloat(BMI);
  }
};

// chose which calculation to implement based on unit
export const choseCalc = (unit: string, height: number, weight: number) => {
  let BMI;
  if (unit === 'metric') {
    BMI = calculateMetric(height, weight);
  } else {
    BMI = calculateImperial(height, weight);
  }
  return BMI;
};
export const checkIfNumberInput = (value: string) => {
  return /[0-9]+/g.test(value);
};

// get the ideal lowest and heisght weight in metric based on height and bmi
export const getMetricWeight = (height: number) => {
  let heightInMeter = height / 100;

  let lowestMWeight = (18.5 * (heightInMeter * heightInMeter)).toFixed(0);
  let highestMWeight = (24.9 * (heightInMeter * heightInMeter)).toFixed(0);
  return {
    lowestMWeight,
    highestMWeight,
  };
};
// get the ideal lowest and heisght weight in imperial
export const getImperialWeight = (height: number) => {
  let ftToCm = height * 30.48;
  let heightInMeter = ftToCm / 100;
  let lowestMWeight = 18.5 * (heightInMeter * heightInMeter);
  let highestMWeight = 24.9 * (heightInMeter * heightInMeter);

  let lowestStWeight = (lowestMWeight / 6.35).toFixed(2);
  let lowestLbsWeight = (lowestMWeight * 2.205).toFixed(2);

  let highestStWeight = (highestMWeight / 6.35).toFixed(2);
  let highestLbsWeight = (highestMWeight * 2.205).toFixed(2);

  return {
    lowestLbsWeight,
    lowestStWeight,
    highestLbsWeight,
    highestStWeight,
  };
};
