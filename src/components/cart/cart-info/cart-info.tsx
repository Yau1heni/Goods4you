import {FC} from 'react';
import styles from './cart-info.module.css'
import {clsx} from "clsx";
import {Cart, Nullable} from "@/types";
import {roundToTwoDecimals} from "@/utils";

type CartInfoProps = {
    carts: Nullable<Cart>
}

export const CartInfo: FC<CartInfoProps> = ({carts}) => {
    return (
        <div className={styles.cartInfo}>
            <div className={styles.textContainer}>
                <p className={clsx(styles.textSmall, styles.textGray)}>Total count</p>
                <p className={clsx(styles.textSmall, styles.textDark)}>{carts?.totalProducts} items</p>
            </div>
            <div className={styles.textContainer}>
                <p className={clsx(styles.textMedium, styles.textGray)}>Price without discount</p>
                <p className={clsx(styles.textMedium, styles.textDark)}>${carts?.total || 0}</p>
            </div>
            <div className={clsx(styles.textContainer, styles.textTotalPrice)}>
                <p className={clsx(styles.textLarge, styles.textGray)}>Total price</p>
                <p className={clsx(styles.textLarge, styles.textDark)}>${roundToTwoDecimals(carts?.discountedTotal || 0)}</p>
            </div>
        </div>
    );
};
