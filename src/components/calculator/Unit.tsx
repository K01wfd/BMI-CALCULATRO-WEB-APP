import styles from '../../styles/calculator/calculator.module.css';

interface Props {
  id: string;
  label: string;
  onUnitChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
function Unit({ id, label, onUnitChange }: Props) {
  return (
    <>
      <div className={styles.unitGroup}>
        <input
          type='radio'
          onChange={onUnitChange}
          className={styles.units}
          id={id}
          value={id}
          name='unit'
        />
        <label htmlFor='metric' className={styles.unitsLabel}>
          {label}
        </label>
      </div>
    </>
  );
}

export default Unit;
