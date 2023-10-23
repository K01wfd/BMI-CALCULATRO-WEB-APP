import { useState } from 'react';
import styles from '../../styles/calculator/calculator.module.css';
import Content from './Content';
import { useForm } from 'react-hook-form';
function CalcMain() {
  const [unit, setUnit] = useState<string>('metric');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
