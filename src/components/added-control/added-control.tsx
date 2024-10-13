import Increase from '@/assets/svg/plus.svg?react';
import Decrease from '@/assets/svg/minus.svg?react';
import styles from './added-control.module.css';
import { Button } from '@/components';
import { FC } from 'react';
import { updateCart } from '@/store/slices/carts-slice/cart-slice.ts';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { UpdateMode } from '@/types';
import { mainSelectors } from '@/store';

type AddedControlProps = {
  quantityProducts: number;
  id: number;
  refetch?: () => void;
  stock?: number;
};

export const AddedControl: FC<AddedControlProps> = (props) => {
  const { quantityProducts, id, refetch, stock } = props;
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(mainSelectors.isLoading);

  const increaseQuantityHandler = () => {
    dispatch(updateCart({ id, updateMode: UpdateMode.INCREASE }));
    if (refetch) {
      refetch();
    }
  };

  const decreaseQuantityHandler = () => {
    const mode = quantityProducts > 1 ? UpdateMode.DECREASE : UpdateMode.DELETE;
    dispatch(updateCart({ id, updateMode: mode }));
    if (refetch) {
      refetch();
    }
  };

  const itemsText = quantityProducts <= 1 ? 'item' : 'items';

  return (
    <div className={styles.addedControl}>
      <Button
        className={styles.button}
        disabled={quantityProducts === 0 || isLoading}
        onClick={decreaseQuantityHandler}
      >
        <Decrease />
      </Button>
      <div className={styles.textContainer}>
        <p className={styles.text}>
          {quantityProducts} {itemsText}
        </p>
      </div>
      <Button
        disabled={stock === quantityProducts || isLoading}
        className={styles.button}
        onClick={increaseQuantityHandler}
      >
        <Increase />
      </Button>
    </div>
  );
};
