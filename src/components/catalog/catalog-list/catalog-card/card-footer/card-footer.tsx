import { FC } from 'react';
import styles from './card-footer.module.css';
import { AddedControl, Button } from '@/components';
import Basket from '@/assets/svg/basket.svg?react';
import { addProductToCart } from '@/store/slices/carts-slice/cart-slice.ts';
import { UpdatedProduct } from '@/types';
import { useAppDispatch } from '@/hooks';

type CardFooterProps = {
  cardData: UpdatedProduct;
  refetch: () => void;
  price: string;
};

export const CardFooter: FC<CardFooterProps> = (props) => {
  const { cardData, refetch, price } = props;
  const { id, quantity, title } = cardData;

  const dispatch = useAppDispatch();

  const addProductHandler = () => {
    const newProduct = {
      id: cardData.id,
      quantity: quantity + 1,
    };

    dispatch(addProductToCart({ product: newProduct }));
    if (refetch) {
      refetch();
    }
  };

  return (
    <div className={styles.cardFooter}>
      <div className={styles.textContainer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>${price}</p>
      </div>

      {quantity === 0 ? (
        <Button onClick={addProductHandler} aria-label={'Basket'} className={styles.button}>
          <Basket />
        </Button>
      ) : (
        <AddedControl refetch={refetch} id={id} quantityProducts={quantity} />
      )}
    </div>
  );
};
