import {FC} from 'react';
import styles from './cart-draft-item.module.css'
import {clsx} from "clsx";
import Basket from '@/assets/svg/basket.svg?react'
import {Button} from "@/components";
import {useAppDispatch} from "@/hooks";
import {addProductToCart} from "@/store";
import {CartProduct} from "@/types";

type CartDraftItemProps = {
    product: CartProduct
}

export const CartDraftItem: FC<CartDraftItemProps> = ({product}) => {
    const {thumbnail, price, title} = product
    const dispatch = useAppDispatch();


    const onAddHandler = () => {
        dispatch(addProductToCart({product: product, isFromDraft: true}))
    }

    return (
        <div className={styles.cartDraftItem}>
            <div className={clsx(styles.cartItemInfo, styles.deleted)}>
                <img width={100} height={100} src={thumbnail} alt="product"/>
                <div className={styles.textContainer}>
                    <p className={styles.text}>{title}</p>
                    <p className={styles.price}>${price}</p>
                </div>
            </div>
            <div className={styles.control}>
                <Button aria-label={'Basket'} onClick={onAddHandler} className={styles.buttonBasket}><Basket/></Button>
            </div>
        </div>
    );
};
