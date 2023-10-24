export const convertHeight = (ftValue: number) => {
  return ftValue * 12;
};
export const convertWeight = (ftValue: number) => {
  return ftValue * 14;
};
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
const calculateImperial = (height: number, weight: number) => {
  if (height !== 0 && weight !== 0) {
    let cm = height * 30.48;
    let meter = cm / 100;
    let kg = weight * 6.35;
    let BMI = (kg / (meter * meter)).toFixed(1);
    return parseFloat(BMI);
  }
};
export const calculate = (unit: string, height: number, weight: number) => {
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
