import logoImg from '../../assets/images/logo.svg';
import {
  getImperialWeight,
  getMetricWeight,
} from '../../services/calculatorFunctions';
import styles from '../../styles/calculator/calculator.module.css';
import InputFields from './InputFields';
import Result from './Result';
import Unit from './Unit';

import { FieldValues, UseFormRegister } from 'react-hook-form';
const bmiResults = {
  underweight:
    'You are underweight for your height. It is important to aim for a healthy weight range',
  healthy: 'Your BMI suggests you have a healthy weight.',
  overweight:
    'You are overweight for your height. Being overweight can increase your risk for many diseases.',
  obese:
    'Your BMI is considered obese, It is important to take steps to reduce your weight.',
};
interface Props {
  register: UseFormRegister<FieldValues>;
  onUnitChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  unit: string;
  onInputChange: (e: FieldValues) => void;
  hasResult: boolean;
  result: number;
  height: number;
}
function Content({
  register,
  unit,
  onUnitChange,
  onInputChange,
  hasResult,
  result,
  height,
}: Props) {
  const { lowestMWeight, highestMWeight } = getMetricWeight(height);
  const { lowestStWeight, lowestLbsWeight, highestStWeight, highestLbsWeight } =
    getImperialWeight(height);
  let resultExplanation = '';
  if (hasResult) {
    result < 18.5
      ? (resultExplanation = bmiResults.underweight)
      : result >= 18.5 && result <= 24.9
      ? (resultExplanation = bmiResults.healthy)
      : result >= 25 && result <= 30
      ? (resultExplanation = bmiResults.overweight)
      : (resultExplanation = bmiResults.obese);
  }

  return (
    <>
      <div className={styles.calcDetails}>
        <img src={logoImg} className={styles.logo} alt='logo' />
        <h1>Body Mass Index Calculator</h1>
        <p>
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>
      </div>
      <div className={styles.calcContainer}>
        <p role='heading'>Enter your details below</p>
        <form>
          {/*  */}
          <Unit onUnitChange={onUnitChange} />
          {/*  */}
          <InputFields
            register={register}
            unit={unit}
            onInputChange={onInputChange}
          />
        </form>
        {/*  */}
        <div className={styles.resultContainer}>
          <Result
            hasResult={hasResult}
            result={result}
            resultExplanation={resultExplanation}
            lowestWeight={
              unit === 'metric'
                ? lowestMWeight + 'kg'
                : lowestStWeight + 'st ' + lowestLbsWeight + 'lbs'
            }
            highestWeight={
              unit === 'metric'
                ? highestMWeight + 'kg'
                : highestStWeight + 'st ' + highestLbsWeight + 'lbs'
            }
          />
        </div>
      </div>
    </>
  );
}

export default Content;
