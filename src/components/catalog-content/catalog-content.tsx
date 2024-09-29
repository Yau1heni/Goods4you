import styles from './catalog-content.module.css';
import { clsx } from 'clsx';
import commonStyles from '@/styles/common.module.css';
import { Button } from '@/components';

export const CatalogContent = () => {
  return (
    <section className={styles.catalogContent}>
      <div
        className={clsx(
          commonStyles.container,
          styles.contentContainer,
          styles.backgroundImageContainer
        )}
      >
        <h3 className={styles.title}>
          Any products from famous brands
          <br />
          with worldwide delivery
        </h3>
        <h4 className={styles.text}>
          We sell smartphones, laptops, clothes, shoes
          <br />
          and many other products at low prices
        </h4>
        <Button>Go to shopping</Button>
      </div>
    </section>
  );
};
