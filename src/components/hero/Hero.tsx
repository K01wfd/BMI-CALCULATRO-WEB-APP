import styles from '../../styles/hero/hero.module.css';
import hero from '../../assets/images/image-man-eating.webp';
import leftPattern from '../../assets/images/pattern-curved-line-left.svg';
function Hero() {
  return (
    <div className={styles.heroWrapper}>
      <img src={hero} className={styles.hero} alt='man eating' />
      <div className={styles.heroDetails}>
        <img src={leftPattern} className={styles.pattern} alt='' />
        <h2>What your BMI result means</h2>
        <p>
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.{' '}
        </p>
      </div>
    </div>
  );
}

export default Hero;
