import styles from './cart-list.module.css'
import {CartItem} from "./cart-item/cart-item.tsx";
import {useAppSelector} from "@/hooks";
import {cartsSelectors} from "@/store";


export const CartList = () => {
    const carts = useAppSelector(cartsSelectors.carts)

    const cartList = carts?.products.map(product => (
        <CartItem key={product.id} product={product}/>
    ))

    return (
        <div className={styles.cartsList}>
            {cartList}
        </div>
    );
};
