import CalcMain from './components/calculator/CalcMain';
import Hero from './components/hero/Hero';
import Limitations from './components/limitations/Limitations';
import HealthTips from './components/tips/HealthTips';
import styles from './styles/main.module.css';
function App() {
  return (
    <main className={styles.mainContainer}>
      <CalcMain />
      <Hero />
      <HealthTips />
      <Limitations />
    </main>
  );
}

export default App;
