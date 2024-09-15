import {FC} from 'react';
import styles from './badge.module.css'
import Basket from '@/assets/svg/basket.svg?react'

type BadgeProps = {
    value: number
}

export const Badge: FC<BadgeProps> = (props) => {
    const {value} = props

    const finalValue = value > 99 ? '+99': value

    return (
        <div className={styles.badgeContainer}>
            <Basket className={styles.icon}/>
            <div className={styles.badge}>
                {finalValue}
            </div>
        </div>
    );
};
