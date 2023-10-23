import logoImg from '../../assets/images/logo.svg';
import styles from '../../styles/calculator/calculator.module.css';
import InputFields from './InputFields';
import Result from './Result';
import Unit from './Unit';
import { inputFields } from '../../data/inputFields';
import { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { FormData } from './CalcMain';
// LOOK GPT TO HANDLE EACH INPUT FIELD.
// SET FIELDS VALUES PROPERLY
// CONVERT
// SHOW RESULT

interface Props {
  onUnitChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  unit: string;
  hasResult: boolean;
  result: string;
  resultExplanation: string;
  register: UseFormRegister<FormData>;
}
function Content({
  onUnitChange,
  unit,
  hasResult,
  result,
  resultExplanation,
  register,
}: Props) {
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
            <Unit id={'metric'} label={'Metric'} onUnitChange={onUnitChange} />
            <Unit
              id={'imperial'}
              label={'Imperial'}
              onUnitChange={onUnitChange}
            />
          </div>
          {/*  */}
          <div className={styles.inputsWrapper}>
            <InputFields unit={unit} register={register} />
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
