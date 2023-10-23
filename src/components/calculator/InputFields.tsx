import { UseFormRegister } from 'react-hook-form';
import { FormData } from './CalcMain';
import styles from '../../styles/calculator/calculator.module.css';

interface Props {
  unit: string;
  register: UseFormRegister<FormData>;
}
function InputFields({ register, unit }: Props) {
  return (
    <>
      <div className={styles.inputGroup}>
        <label htmlFor={unit === 'metric' ? 'cm' : 'ft'}>Height</label>
        <input
          type='text'
          id={unit === 'metric' ? 'cm' : 'ft'}
          placeholder={'0'}
          className={styles.textInput}
        />
        <span className={styles.measurment}>
          {unit === 'imperial' ? 'ft' : 'cm'}
        </span>
      </div>
      {unit === 'imperial' && (
        <div className={styles.inputGroup}>
          <input
            type='text'
            readOnly
            id='in'
            placeholder={'0'}
            className={styles.textInput}
          />
          <span className={styles.measurment}>in</span>
        </div>
      )}
      <div className={styles.inputGroup}>
        <label htmlFor={unit === 'metric' ? 'kg' : 'st'}>Height</label>
        <input
          type='text'
          id={unit === 'metric' ? 'kg' : 'st'}
          placeholder={'0'}
          className={styles.textInput}
        />
        <span className={styles.measurment}>
          {unit === 'imperial' ? 'st' : 'kg'}
        </span>
      </div>
      {unit === 'imperial' && (
        <div className={styles.inputGroup}>
          <input
            type='text'
            readOnly
            id='lbs'
            placeholder={'0'}
            className={styles.textInput}
          />
          <span className={styles.measurment}>lbs</span>
        </div>
      )}
    </>
  );
}

export default InputFields;
