import styles from '../../styles/calculator/calculator.module.css';
import Explanation from './Explanation';

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
    <div className={hasResult ? styles.wrapperResult : styles.wrapperNoResult}>
      <div className={styles.resultBox}>
        <p>{hasResult ? 'Your BMI is...' : 'Welcome!'}</p>
        <p className={styles.result}>{hasResult ? result : null}</p>
      </div>

      {hasResult ? (
        <Explanation
          highest={highestWeight}
          lowest={lowestWeight}
          explanation={resultExplanation}
        />
      ) : (
        'Enter your height and weight and you will see your BMI result here'
      )}
    </div>
  );
}

export default Result;
