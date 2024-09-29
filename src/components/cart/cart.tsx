import styles from './cart.module.css'
import {clsx} from "clsx";
import commonStyles from "@/styles/common.module.css";
import {Loader, TitleSection} from "@/components";
import {CartList} from "./cart-list/cart-list.tsx";
import {useAppDispatch, useAppSelector} from "@/hooks";
import {useEffect} from "react";
import {cartsSelectors, getCarts, mainSelectors} from "@/store";
import {CartInfo} from "@/components/cart/cart-info/cart-info.tsx";

export const Cart = () => {
    const dispatch = useAppDispatch();
    const carts = useAppSelector(cartsSelectors.carts)
    const isLoading = useAppSelector(mainSelectors.isLoading)

    useEffect(() => {
        dispatch(getCarts({userId: '11'}))
    }, [dispatch]);

    return (
        <section className={clsx(commonStyles.container, styles.cart)}>
            <TitleSection color={'dark'} title={'My cart'}/>
            {carts && carts.products.length > 0
                ? <div className={styles.cartContent}>
                    <CartList/>
                    <CartInfo carts={carts}/>
                </div>
                : <div className={styles.cartNoItems}>
                    <div>No items</div>
                </div>
            }
            {isLoading && <Loader/>}
        </section>
    );
};
