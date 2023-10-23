import { useState } from 'react';
import styles from '../../styles/calculator/calculator.module.css';
import Content from './Content';

function CalcMain() {
  const [unit, setUnit] = useState<string>('imperial');
  const onUnitToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <Content onUnitChange={(event) => onUnitToggle(event)} unit={unit} />
      </div>
    </div>
  );
}

export default CalcMain;
