import styles from './header.module.css'
import {Link as ScrollLink} from "react-scroll";
import commonStyles from '@/styles/common.module.css'
import {clsx} from 'clsx'
import {MainTitle} from "@/components/main-title/main-title.tsx";
import {useAppDispatch, useAppSelector} from "@/hooks";
import {cartsSelectors, getCarts} from "@/store";
import {useEffect} from "react";
import {LinkWithCounter} from "@/components";

export const Header = () => {
    const dispatch = useAppDispatch();
    const totalQuantity = useAppSelector(cartsSelectors.totalQuantity);

    useEffect(() => {
        if (!totalQuantity) {
            dispatch(getCarts({userId: '11'}))
        }
    }, [dispatch, totalQuantity]);

    return (
        <header className={styles.header}>
            <div className={clsx(commonStyles.container, styles.headerContent)}>
                <MainTitle title={'Goods4you'}/>
                <nav className={styles.nav}>
                    <ScrollLink tabIndex={0} className={styles.navItem} to={'catalog'} smooth spy>Catalog</ScrollLink>
                    <ScrollLink tabIndex={0} className={styles.navItem} to={'faq'} smooth spy>FAQ</ScrollLink>
                    <LinkWithCounter title={'Cart'} counter={totalQuantity}/>
                    <p>Johnson Smith</p>
                </nav>
            </div>
        </header>
    );
};
