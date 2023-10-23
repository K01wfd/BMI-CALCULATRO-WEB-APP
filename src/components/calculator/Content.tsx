import logoImg from '../../assets/images/logo.svg';
import styles from '../../styles/calculator/calculator.module.css';
import InputField from './InputField';
import Result from './Result';
import Unit from './Unit';
import { inputFields } from '../../data/inputFields';
interface Props {
  onUnitChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  unit: string;
  hasResult: boolean;
  result: string;
  resultExplanation: string;
}
function Content({
  onUnitChange,
  unit,
  hasResult,
  result,
  resultExplanation,
  onInputChange,
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
            {unit === 'metric' &&
              inputFields.metric.map((data) => (
                <InputField
                  key={data.id}
                  id={data.id}
                  label={data.label}
                  placeholder={data.placeholder}
                  onInputChange={onInputChange}
                  measurment={data.measurment}
                />
              ))}
            {unit === 'imperial' &&
              inputFields.imperialInputs.map((data) => (
                <InputField
                  key={data.id}
                  id={data.id}
                  label={data.label}
                  placeholder={data.placeholder}
                  onInputChange={onInputChange}
                  measurment={data.measurment}
                />
              ))}
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
