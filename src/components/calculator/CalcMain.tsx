import { useState } from 'react';
import styles from '../../styles/calculator/calculator.module.css';
import Content from './Content';
import { useForm } from 'react-hook-form';
export interface FormData {
  input: string;
}
function CalcMain() {
  const [unit, setUnit] = useState<string>('metric');
  const { register } = useForm<FormData>();

  const onUnitToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUnit(event.target.value);
  };

  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <Content
          hasResult={true}
          result='22'
          resultExplanation='nothing'
          onUnitChange={(event) => onUnitToggle(event)}
          unit={unit}
          register={register}
        />
      </div>
    </div>
  );
}

export default CalcMain;
