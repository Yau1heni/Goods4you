import styles from './header.module.css'
import {Link as ScrollLink} from "react-scroll";
import commonStyles from '@/styles/common.module.css'
import {clsx} from 'clsx'
import {MainTitle} from "@/components/main-title/main-title.tsx";
import {useAppDispatch, useAppSelector} from "@/hooks";
import {cartsSelectors, getCarts} from "@/store";
import {FC, useEffect} from "react";
import {LinkWithCounter} from "@/components";
import {useLazyMeQuery} from "@/services/login-api/login-api.ts";
import {localStorageService} from "@/services";
import {LOCAL_STORAGE_KEYS} from "@/constants";
import {Navigate} from "react-router-dom";
import {Paths} from "@/pages";

type HeaderProps = {
    isWithNav?: boolean;
}

export const Header: FC<HeaderProps> = (props) => {
    const {isWithNav = true} = props

    const [me, {data}] = useLazyMeQuery()

    const dispatch = useAppDispatch();
    const totalQuantity = useAppSelector(cartsSelectors.totalQuantity);

    const accessToken = localStorageService.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN)

    useEffect(() => {
        if (accessToken) {
            me().unwrap().then(value => {
                if (!totalQuantity) {
                    dispatch(getCarts({userId: value.id}))
                }
            })
        }
    }, [dispatch, totalQuantity, accessToken]);

    if (!accessToken) {
        return <Navigate to={Paths.LOGIN}/>
    }

    return (
        <header className={styles.header}>
            <div className={clsx(commonStyles.container, styles.headerContent)}>
                <MainTitle title={'Goods4you'}/>
                {isWithNav && data &&
                    <nav className={styles.nav}>
                        <ScrollLink tabIndex={0} className={styles.navItem} to={'catalog'} smooth spy>
                            Catalog
                        </ScrollLink>
                        <ScrollLink tabIndex={0} className={styles.navItem} to={'faq'} smooth spy>FAQ</ScrollLink>
                        <LinkWithCounter title={'Cart'} counter={totalQuantity}/>
                        <p>{data.firstName} {data.lastName}</p>
                    </nav>}
            </div>
        </header>
    );
};
