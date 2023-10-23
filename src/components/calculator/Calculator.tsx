import { ReactNode } from 'react';
import styles from '../../styles/calculator/calculator.module.css';
interface Props {
  children: ReactNode;
}
function Calculator({ children }: Props) {
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>{children}</div>
    </div>
  );
}

export default Calculator;
