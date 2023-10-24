import styles from '../../styles/calculator/calculator.module.css';

interface Props {
  onUnitChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
function Unit({ onUnitChange }: Props) {
  return (
    <>
      <div className={styles.unitGroup}>
        <input
          type='radio'
          onChange={onUnitChange}
          className={styles.units}
          id='metric'
          value='metric'
          name='unit'
          defaultChecked
        />
        <label htmlFor='metric' className={styles.unitsLabel}>
          Metric
        </label>
      </div>
      <div className={styles.unitGroup}>
        <input
          type='radio'
          onChange={onUnitChange}
          className={styles.units}
          id='imperial'
          value='imperial'
          name='unit'
        />
        <label htmlFor='metric' className={styles.unitsLabel}>
          Imperial
        </label>
      </div>
    </>
  );
}

export default Unit;
