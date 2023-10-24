import styles from '../../styles/calculator/calculator.module.css';

interface Props {
  hasResult: boolean;
  result: number;
  resultExplanation: string;
  lowestWeight: string;
  highestWeight: string;
}
function Result({
  hasResult,
  result,
  resultExplanation,
  lowestWeight,
  highestWeight,
}: Props) {
  return (
    <div className={styles.resultInnerWrraper}>
      <div className={styles.resultBox}>
        <p>{hasResult ? 'Your BMI is...' : 'Welcome!'}</p>
        {hasResult ? result : null}
      </div>
      <p>
        {result > 15.5
          ? resultExplanation +
            'your ideal weight is between ' +
            lowestWeight +
            ' - ' +
            highestWeight
          : 'Enter your height and weight and you will see your BMI result here'}
      </p>
    </div>
  );
}

export default Result;
