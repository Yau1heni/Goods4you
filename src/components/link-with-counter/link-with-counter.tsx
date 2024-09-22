import {FC} from 'react';
import styles from './link-with-counter.module.css'
import {Link as RouterLink} from "react-router-dom";
import {Paths} from "@/pages";
import {Badge} from "@/components/badge/badge.tsx";

type LinkWithCounterProps = {
    title: string
    counter: number
}

export const LinkWithCounter: FC<LinkWithCounterProps> = (props) => {
    const {counter, title} = props

    return (
        <RouterLink className={styles.navItem} to={Paths.CART}>
            {title}
            {counter > 0 && <Badge value={counter}/>}
        </RouterLink>
    );
};
