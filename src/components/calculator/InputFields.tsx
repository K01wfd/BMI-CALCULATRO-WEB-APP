import { FieldValues, UseFormRegister } from 'react-hook-form';
import styles from '../../styles/calculator/inputs.module.css';

interface Props {
  register: UseFormRegister<FieldValues>;
  unit: string;
  onInputChange: (e: FieldValues) => void;
}
function InputFields({ register, unit, onInputChange }: Props) {
  return (
    <div className={styles.inputsWrapperImperial}>
      <div className={styles.inputGroup}>
        <label htmlFor={unit === 'metric' ? 'cm' : 'ft'}>Height</label>
        <input
          type='text'
          className={styles.textInput}
          id={unit === 'metric' ? 'cm' : 'ft'}
          placeholder='0'
          {...register('height')}
          onChange={onInputChange}
        />
        <span className={styles.measurment}>
          {unit === 'imperial' ? 'ft' : 'cm'}
        </span>
      </div>
      {/*  */}

      {unit === 'imperial' && (
        <div className={styles.readOnly}>
          <input
            type='text'
            className={styles.textInput}
            id='in'
            {...register('convertedHeight')}
            readOnly
            placeholder='0'
          />
          <span className={styles.measurment}>in</span>
        </div>
      )}

      {/*  */}
      <div className={styles.inputGroup}>
        <label htmlFor={unit === 'metric' ? 'kg' : 'st'}>Weight</label>
        <input
          type='text'
          id={unit === 'metric' ? 'kg' : 'st'}
          className={styles.textInput}
          placeholder='0'
          {...register('weight')}
          onChange={onInputChange}
        />
        <span className={styles.measurment}>
          {unit === 'imperial' ? 'st' : 'kg'}
        </span>
      </div>
      {/*  */}

      {unit === 'imperial' && (
        <div className={styles.readOnly}>
          <input
            type='text'
            id='lbs'
            className={styles.textInput}
            {...register('convertedWeight')}
            readOnly
            placeholder='0'
          />
          <span className={styles.measurment}>lbs</span>
        </div>
      )}
    </div>
  );
}

export default InputFields;
