import styles from './header.module.css'
import {Link as ScrollLink} from "react-scroll";
import {Link as RouterLink} from 'react-router-dom';
import {Paths} from "@/pages";
import commonStyles from '@/styles/common.module.css'
import {clsx} from 'clsx'
import {MainTitle} from "@/components/main-title/main-title.tsx";
import {Badge} from "@/components/badge/badge.tsx";


export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={clsx(commonStyles.container, styles.headerContent)}>
                <MainTitle title={'Goods4you'}/>
                <nav className={styles.nav}>
                    <ScrollLink tabIndex={0} className={styles.navItem} to={'catalog'} smooth spy>Catalog</ScrollLink>
                    <ScrollLink tabIndex={0} className={styles.navItem} to={'faq'} smooth spy>FAQ</ScrollLink>
                    <RouterLink className={styles.navItem} to={Paths.CATALOG}>
                        Cart
                        <Badge value={100}/>
                    </RouterLink>
                    <p>Johnson Smith</p>
                </nav>
            </div>
        </header>
    );
};
