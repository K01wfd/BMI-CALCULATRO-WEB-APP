import styles from '../../styles/limitations/limitation.module.css';
import gender from '../../assets/images/icon-gender.svg';
import muscle from '../../assets/images/icon-muscle.svg';
import age from '../../assets/images/icon-age.svg';
import pregnancy from '../../assets/images/icon-pregnancy.svg';
import race from '../../assets/images/icon-race.svg';
import right from '../../assets/images/pattern-curved-line-right.svg';
function Limitations() {
  return (
    <div className={styles.limitationsWrapper}>
      <div className={styles.limitationText}>
        <h2>Limitations of BMI</h2>
        <p>
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>

      <div className={`${styles.card} ${styles.card1}`}>
        <div className={styles.cardHeader}>
          <img src={gender} className={styles.cardIcon} alt='gender icon' />
          <h4>Gender</h4>
        </div>
        <p>
          The development and body fat composition of girls and boys vary with
          age. Consequently, a child's age and gender are considered when
          evaluating their BMI.
        </p>
      </div>

      <img
        src={right}
        className={styles.rightPattern}
        alt='background pattern'
      />
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <img src={age} className={styles.cardIcon} alt='age icon' />
          <h4>Age</h4>
        </div>
        <p>
          In aging individuals, increased body fat and muscle loss may cause BMI
          to underestimate body fat content.
        </p>
      </div>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <img src={muscle} className={styles.cardIcon} alt='muscle icon' />
          <h4>Muscle</h4>
        </div>
        <p>
          BMI may misclassify muscular individuals as overweight or obese, as it
          doesn't differentiate muscle from fat.
        </p>
      </div>

      <div className={`${styles.card} ${styles.card5}`}>
        <div className={styles.cardHeader}>
          <img
            src={pregnancy}
            className={styles.cardIcon}
            alt='pregnancy icon'
          />
          <h4>Pregnancy</h4>
        </div>
        <p>
          Expectant mothers experience weight gain due to their growing baby.
          Maintaining a healthy pre-pregnancy BMI is advisable to minimise
          health risks for both mother and child.
        </p>
      </div>
      <div className={`${styles.card} ${styles.card6}`}>
        <div className={styles.cardHeader}>
          <img src={race} className={styles.cardIcon} alt='race icon' />
          <h4>Race</h4>
        </div>
        <p>
          Certain health concerns may affect individuals of some Black and Asian
          origins at lower BMIs than others. To learn more, it is advised to
          discuss this with your GP or practice nurse.
        </p>
      </div>
    </div>
  );
}

export default Limitations;
