import {FC, useState} from 'react';
import styles from './cart-item.module.css'
import {AddedControl, Button} from "@/components";
import Basket from '@/assets/svg/basket.svg?react'
import {clsx} from "clsx";
import {CartProduct} from "@/types";

type CartItemProps = { product: CartProduct }

export const CartItem: FC<CartItemProps> = ({product}) => {
    const {thumbnail, price, title} = product

    const [isDelete, setIsDelete] = useState(false)

    const onDeleteHandler = () => {
        setIsDelete(true)
    }

    return (
        <div className={styles.cartItem}>
            <div className={clsx(styles.cartItemInfo, isDelete && styles.deleted)}>
                <img width={100} height={100} src={thumbnail} alt="product"/>
                <div className={styles.textContainer}>
                    <p className={styles.text}>{title}</p>
                    <p className={styles.price}>${price}</p>
                </div>
            </div>
            {!isDelete && <AddedControl amountProducts={product.quantity}/>}
            {isDelete
                ? <Button aria-label={'Basket'} className={styles.buttonBasket}><Basket/></Button>
                : <Button onClick={onDeleteHandler} className={styles.buttonDelete}>Delete</Button>
            }
        </div>
    );
};
