import logoImg from '../../assets/images/logo.svg';
import styles from '../../styles/calculator/calculator.module.css';
import Unit from './Unit';

interface Props {
  onUnitChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
function Content({ onUnitChange }: Props) {
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
      <div className={styles.calcFormContainer}>
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
          <div className={styles.inputsWrapper}></div>
        </form>
      </div>
    </>
  );
}

export default Content;
