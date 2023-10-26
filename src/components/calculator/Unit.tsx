import styles from '../../styles/calculator/unit.module.css';

interface Props {
  onUnitChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
function Unit({ onUnitChange }: Props) {
  return (
    <div className={styles.unitsWrapper}>
      <div className={styles.unitGroup}>
        <input
          type='radio'
          onChange={onUnitChange}
          className={styles.unit}
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
          className={styles.unit}
          id='imperial'
          value='imperial'
          name='unit'
        />
        <label htmlFor='imperial' className={styles.unitsLabel}>
          Imperial
        </label>
      </div>
    </div>
  );
}

export default Unit;
