import {FC, useState} from 'react';
import styles from './cart-item.module.css'
import {AddedControl, Button} from "@/components";
import {CatalogCardItem} from "@/mock-data/catalog.types.ts";
import Basket from '@/assets/svg/basket.svg?react'
import {clsx} from "clsx";

type CartItemProps = { cart: CatalogCardItem }

export const CartItem: FC<CartItemProps> = ({cart}) => {
    const {image, price, text} = cart

    const [isDelete, setIsDelete] = useState(false)

    const onDeleteHandler = () => {
        setIsDelete(true)
    }

    return (
        <div className={styles.cartItem}>
            <div className={clsx(styles.cartItemInfo, isDelete && styles.deleted)}>
                <img width={100} height={100} src={image} alt="product"/>
                <div className={styles.textContainer}>
                    <p className={styles.text}>{text}</p>
                    <p className={styles.price}>${price}</p>
                </div>
            </div>
            {!isDelete && <AddedControl/>}
            {isDelete
                ? <Button aria-label={'Basket'} className={styles.buttonBasket}><Basket/></Button>
                : <Button onClick={onDeleteHandler} className={styles.buttonDelete}>Delete</Button>
            }
        </div>
    );
};
