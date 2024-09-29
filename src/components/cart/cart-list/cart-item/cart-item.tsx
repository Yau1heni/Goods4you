import {FC} from 'react';
import styles from './cart-item.module.css'
import {AddedControl, Button} from "@/components";
import {CartProduct, UpdateMode} from "@/types";
import {useAppDispatch} from "@/hooks";
import {updateCart} from "@/store";

type CartItemProps = {
    product: CartProduct
}

export const CartItem: FC<CartItemProps> = ({product}) => {
    const {thumbnail, price, title, id} = product
    const dispatch = useAppDispatch();

    const onDeleteHandler = () => {
        dispatch(updateCart({id: id, updateMode: UpdateMode.DELETE}))
    }

    return (
        <div className={styles.cartItem}>
            <div className={styles.cartItemInfo}>
                <img width={100} height={100} src={thumbnail} alt="product"/>
                <div className={styles.textContainer}>
                    <p className={styles.text}>{title}</p>
                    <p className={styles.price}>${price}</p>
                </div>
            </div>
            <div className={styles.control}>
                <AddedControl id={id} quantityProducts={product.quantity}/>
                <Button onClick={onDeleteHandler} className={styles.buttonDelete}>Delete</Button>
            </div>
        </div>
    );
};
