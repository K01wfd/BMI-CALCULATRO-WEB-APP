import { useEffect, useState } from 'react';
import styles from '../../styles/calculator/calculator.module.css';
import CalcContent from './CalcContent';
import { FieldValues, useForm } from 'react-hook-form';
import {
  choseCalc,
  checkIfNumberInput,
  convertHeight,
  convertWeight,
} from '../../services/calculatorFunctions';

function CalcMain() {
  let trigger = 0;
  const { register, setValue } = useForm<FieldValues>();
  const [unit, setUnit] = useState<string>('metric');
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [result, setResult] = useState(0);
  const [hasResult, setHasResult] = useState(false);

  const onUnitToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUnit(event.target.value);
    setValue('height', 0);
    setValue('convertedHeight', 0);
    setValue('convertedWeight', 0);
    setValue('weight', 0);
    setHeight(0);
    setWeight(0);
    setHasResult(false);
  };
  const handleInputsChange = (e: FieldValues) => {
    setResult(0);
    trigger += 1;
    let initialValue = e.target.value;
    let numberValue = checkIfNumberInput(initialValue)
      ? parseFloat(e.target.value.trim().replace(/\s/g, ''))
      : 0;
    if (unit === 'imperial') {
      if (e.target.id === 'ft') {
        let inch;
        inch = convertHeight(numberValue);
        setValue('convertedHeight', inch.toFixed(1));
      }
      if (e.target.id === 'st') {
        let lbs = 0;
        lbs = convertWeight(numberValue);
        setValue('convertedWeight', lbs.toFixed(1));
      }
    }
    if (e.target.id === 'cm' || e.target.id === 'ft') {
      setHeight(numberValue);
    } else {
      setWeight(numberValue);
    }
  };
  useEffect(() => {
    const BMI = choseCalc(unit, height, weight);
    if (BMI && BMI > 15 && BMI < 81) {
      setResult(BMI);
      setHasResult(true);
    }
  }, [handleInputsChange]);
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <CalcContent
          unit={unit}
          onUnitChange={(event) => onUnitToggle(event)}
          register={register}
          onInputChange={handleInputsChange}
          hasResult={hasResult}
          result={result}
          height={height}
        />
      </div>
    </div>
  );
}

export default CalcMain;
