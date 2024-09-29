import styles from './cart-list.module.css'
import {CartItem} from "./cart-item/cart-item.tsx";
import {CartDraftItem} from "./cart-draft-item/cart-draft-item.tsx";
import {useAppSelector} from "@/hooks";
import {cartsSelectors} from "@/store";
import {Cart, Nullable} from "@/types";
import {FC} from "react";

type CartListProps = {
    carts: Nullable<Cart>
}

export const CartList: FC<CartListProps> = ({carts}) => {
    const drafts = useAppSelector(cartsSelectors.drafts)

    const cartList = carts?.products.map(product => (
        <CartItem key={product.id} product={product}/>
    ))
    const draftList = drafts?.map(draft => (
        <CartDraftItem key={draft.id} product={draft}/>
    ))

    return (
        <div className={styles.cartsList}>
            {cartList}
            {draftList}
        </div>
    );
};
