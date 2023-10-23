import styles from '../../styles/calculator/calculator.module.css';

interface Props {
  hasResult: boolean;
  result: string;
  resultExplanation: string;
}
function Result({ hasResult, result, resultExplanation }: Props) {
  return (
    <div className={styles.resultInnerWrraper}>
      <div className={styles.resultBox}>
        <p>{hasResult ? 'Your BMI is...' : 'Welcome!'}</p>
        {hasResult ? result : null}
      </div>
      <p>
        {hasResult
          ? resultExplanation
          : 'Enter your height and weight and you’ll see your BMI result here'}
      </p>
    </div>
  );
}

export default Result;
