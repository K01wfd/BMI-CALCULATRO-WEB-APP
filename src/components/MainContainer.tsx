import { ReactNode } from 'react';
import styles from '../styles/main.module.css';

interface Props {
  children: ReactNode;
}
function MainContainer({ children }: Props) {
  return <main className={styles.mainContainer}>{children}</main>;
}

export default MainContainer;
