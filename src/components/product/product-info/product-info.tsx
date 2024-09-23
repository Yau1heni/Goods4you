import styles from './product-info.module.css'
import {clsx} from "clsx";
import {Button, Rating} from "@/components";
import {Paths} from "@/pages";
import {Link as RouterLink} from 'react-router-dom';

export const ProductInfo = () => {
    return (
        <div className={styles.productInfo}>
            <RouterLink className={styles.navItem} to={Paths.CART}>
                <h2 className={styles.title}>Essence Mascara Lash Princess</h2>
            </RouterLink>
            <div className={styles.metaData}>
                <Rating ratingValue={4}/>
                <p className={styles.textSecondary}>electronics, selfie accessories</p>
            </div>
            <h3 className={styles.stock}>In Stock - Only 5 left!</h3>
            <p className={styles.description}>
                The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening
                effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.
            </p>
            <div>
                <p className={styles.textSecondary}>1 month warranty</p>
                <p className={styles.textSecondary}>Ships in 1 month</p>
            </div>
            <div className={styles.productFooter}>
                <div className={styles.priceContainer}>
                    <div className={styles.price}>
                        <h3>$7.17</h3>
                        <h3 className={clsx(styles.textSecondary, styles.crossedText)}>$9.99</h3>
                    </div>
                    <div className={styles.price}>
                        <p className={styles.textSecondary}>Your discount:<span
                            className={styles.discount}>14.5%</span></p>
                    </div>
                </div>
                <Button>Add to cart</Button>
            </div>
        </div>
    );
};
