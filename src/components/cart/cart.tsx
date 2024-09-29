import styles from './cart.module.css';
import { clsx } from 'clsx';
import commonStyles from '@/styles/common.module.css';
import { Loader, TitleSection } from '@/components';
import { CartList } from './cart-list/cart-list.tsx';
import { useAppSelector } from '@/hooks';
import { cartsSelectors, mainSelectors } from '@/store';
import { CartInfo } from './cart-info/cart-info.tsx';
import { Theme } from '@/types';

export const Cart = () => {
  const carts = useAppSelector(cartsSelectors.carts);
  const isLoading = useAppSelector(mainSelectors.isLoading);

  return (
    <section className={clsx(commonStyles.container, styles.cart)}>
      <TitleSection color={Theme.DARK} title={'My cart'} />
      {carts && carts.products.length > 0 ? (
        <div className={styles.cartContent}>
          <CartList carts={carts} />
          <CartInfo carts={carts} />
        </div>
      ) : (
        <div className={styles.cartNoItems}>
          <div>No items</div>
        </div>
      )}
      {isLoading && <Loader />}
    </section>
  );
};
