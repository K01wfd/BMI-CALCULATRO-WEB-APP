import styles from '../../styles/tips/tips.module.css';
import eating from '../../assets/images/icon-eating.svg';
import exercise from '../../assets/images/icon-exercise.svg';
import sleep from '../../assets/images/icon-sleep.svg';
function HealthTips() {
  return (
    <div className={styles.tipsContainer}>
      <div className={styles.tip}>
        <img src={eating} className={styles.tipIcon} alt='eating icon' />
        <div className={styles.tipDetails}>
          <h3>Healthy eating</h3>
          <p>
            Healthy eating promotes weight control, disease prevention, better
            digestion, immunity, mental clarity, and mood.
          </p>
        </div>
      </div>
      {/*  */}
      <div className={styles.tip}>
        <img src={exercise} className={styles.tipIcon} alt='exercise icon' />
        <div className={styles.tipDetails}>
          <h3>Regular exercise</h3>
          <p>
            Exercise improves fitness, aids weight control, elevates mood, and
            reduces disease risk, fostering wellness and longevity.
          </p>
        </div>
      </div>
      {/*  */}
      <div className={styles.tip}>
        <img src={sleep} className={styles.tipIcon} alt='sleep icon' />
        <div className={styles.tipDetails}>
          <h3>Adequate sleep</h3>
          <p>
            Sleep enhances mental clarity, emotional stability, and physical
            wellness, promoting overall restoration and rejuvenation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HealthTips;
