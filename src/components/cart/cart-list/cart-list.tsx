import styles from './cart-list.module.css'
import {CartItem} from "./cart-item/cart-item.tsx";
import {cartsData} from "@/mock-data/carts-data.ts";


export const CartList = () => {
    const cartList = cartsData.map(cart => (
        <CartItem key={cart.id} cart={cart}/>
    ))

    return (
        <div className={styles.cartsList}>
            {cartList}
        </div>
    );
};
