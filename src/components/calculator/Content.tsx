import logoImg from '../../assets/images/logo.svg';
import styles from '../../styles/calculator/calculator.module.css';
import InputFields from './InputFields';
import Result from './Result';
import Unit from './Unit';

import { FieldValues, UseFormRegister } from 'react-hook-form';

// LOOK GPT TO HANDLE EACH INPUT FIELD.
// SET FIELDS VALUES PROPERLY
// CONVERT
// SHOW RESULT

interface Props {
  register: UseFormRegister<FieldValues>;
  onUnitChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  unit: string;
  onInputChange: (e: FieldValues) => void;
  hasResult: boolean;
  result: number;
  resultExplanation: string;
}
function Content({
  register,
  unit,
  onUnitChange,
  onInputChange,
  hasResult,
  result,
  resultExplanation,
}: Props) {
  // under 18.5 considered underweight
  // between 18.5 - 24.9 healthy weight
  // between 25 - 30 overweight
  // > 30 obese

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
          <div className={styles.unitsWrapper}>
            <Unit onUnitChange={onUnitChange} />
          </div>
          {/*  */}
          <div className={styles.inputsWrapper}>
            <InputFields
              register={register}
              unit={unit}
              onInputChange={onInputChange}
            />
          </div>
        </form>
        {/*  */}
        <div className={styles.resultContainer}>
          <Result
            hasResult={hasResult}
            result={result}
            resultExplanation={resultExplanation}
          />
        </div>
      </div>
    </>
  );
}

export default Content;
