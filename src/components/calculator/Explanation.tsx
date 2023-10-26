import styles from '../../styles/calculator/calculator.module.css';
interface Props {
  lowest: string;
  highest: string;
  explanation: string;
}
function Explanation({ lowest, highest, explanation }: Props) {
  return (
    <div className={styles.weightRanges}>
      <p>
        {explanation} Your ideal weight should be between <span>{lowest}</span>{' '}
        - <span>{highest}</span>
      </p>
    </div>
  );
}

export default Explanation;
