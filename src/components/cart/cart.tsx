import styles from './cart.module.css'
import {clsx} from "clsx";
import commonStyles from "@/styles/common.module.css";
import {TitleSection} from "@/components";

import {CartList} from "./cart-list/cart-list.tsx";

export const Cart = () => {
    return (
        <section className={clsx(commonStyles.container, styles.cart)}>
            <TitleSection color={'dark'} title={'My cart'}/>
            <div className={styles.cartContent}>
                <CartList/>
                <div className={styles.total}>
                    <div className={styles.textContainer}>
                        <p className={clsx(styles.textSmall, styles.textGray)}>Total count</p>
                        <p className={clsx(styles.textSmall, styles.textDark)}>3 items</p>
                    </div>
                    <div className={styles.textContainer}>
                        <p className={clsx(styles.textMedium, styles.textGray)}>Price without discount</p>
                        <p className={clsx(styles.textMedium, styles.textDark)}>$700</p>
                    </div>
                    <div className={clsx(styles.textContainer, styles.textTotalPrice)}>
                        <p className={clsx(styles.textLarge, styles.textGray)}>Total price</p>
                        <p className={clsx(styles.textLarge, styles.textDark)}>$590</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
