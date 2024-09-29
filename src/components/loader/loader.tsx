import Lottie from 'lottie-react';
import loader from './loader.json';
import styles from './loader.module.css';

export const Loader = () => (
  <div className={styles.loaderContainer}>
    <Lottie className={styles.loader} animationData={loader} />
  </div>
);
