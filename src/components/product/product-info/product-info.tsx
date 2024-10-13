import styles from './product-info.module.css';
import { clsx } from 'clsx';
import { AddedControl, Button, Rating } from '@/components';
import { Paths } from '@/pages';
import { Link as RouterLink } from 'react-router-dom';
import { FC } from 'react';
import { UpdatedProduct } from '@/types';
import { calculatePriceWithDiscount, roundToTwoDecimals } from '@/utils';
import { addProductToCart } from '@/store';
import { useAppDispatch } from '@/hooks';

type ProductInfoProps = {
  product: UpdatedProduct;
  refetch: () => void;
};

export const ProductInfo: FC<ProductInfoProps> = ({ product, refetch }) => {
  const {
    rating,
    title,
    price,
    tags,
    warrantyInformation,
    shippingInformation,
    discountPercentage,
    description,
    stock,
    id,
    quantity,
  } = product;

  const dispatch = useAppDispatch();

  const finalPrice = calculatePriceWithDiscount(price, discountPercentage);

  const onAddHandler = () => {
    dispatch(addProductToCart({ product: { id, quantity: quantity + 1 } }));
    if (refetch) {
      refetch();
    }
  };

  return (
    <div className={styles.productInfo}>
      <RouterLink className={styles.navItem} to={Paths.CART}>
        <h2 className={styles.title}>{title}</h2>
      </RouterLink>
      <div className={styles.metaData}>
        <Rating ratingValue={Math.round(rating)} />
        <div>
          {tags.map((tag, index) => (
            <span key={index} className={styles.textSecondary}>
              {tag}
              {tags.length - 1 > index && ', '}
            </span>
          ))}
        </div>
      </div>
      <h3 className={styles.stock}>In Stock - Only {stock} left!</h3>
      <p className={styles.description}>{description}</p>
      <div>
        <p className={styles.textSecondary}>{warrantyInformation}</p>
        <p className={styles.textSecondary}>{shippingInformation}</p>
      </div>
      <div className={styles.productFooter}>
        <div className={styles.priceContainer}>
          <div className={styles.price}>
            <h3>${finalPrice}</h3>
            <h3 className={clsx(styles.textSecondary, styles.crossedText)}>
              ${roundToTwoDecimals(price)}
            </h3>
          </div>
          <div className={styles.price}>
            <p className={styles.textSecondary}>
              Your discount: <span className={styles.discount}>{discountPercentage}%</span>
            </p>
          </div>
        </div>
        {quantity === 0 ? (
          <Button disabled={stock === 0} onClick={onAddHandler}>
            Add to cart
          </Button>
        ) : (
          <AddedControl stock={stock} refetch={refetch} id={id} quantityProducts={quantity} />
        )}
      </div>
    </div>
  );
};
