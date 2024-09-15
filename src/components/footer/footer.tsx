import styles from './footer.module.css'
import commonStyles from '@/styles/common.module.css'
import {clsx} from "clsx";
import {Link as ScrollLink} from "react-scroll";
import {MainTitle} from "@/components/main-title/main-title.tsx";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={clsx(commonStyles.container, styles.footerContent)}>
                <MainTitle title={'Goods4you'}/>
                <nav>
                    <ScrollLink tabIndex={0} className={styles.navItem} to={'catalog'} smooth spy>Catalog</ScrollLink>
                    <ScrollLink tabIndex={0} className={styles.navItem} to={'faq'} smooth spy>FAQ</ScrollLink>
                </nav>
            </div>
        </footer>
    );
};
