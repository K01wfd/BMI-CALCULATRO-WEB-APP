import styles from '../../styles/calculator/calculator.module.css';
import Content from './Content';

function CalcMain() {
  const onUnitToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <Content onUnitChange={(event) => onUnitToggle(event)} />
      </div>
    </div>
  );
}

export default CalcMain;
