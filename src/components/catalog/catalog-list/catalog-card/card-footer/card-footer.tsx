import {FC} from 'react';
import styles from './card-footer.module.css'
import {AddedControl, Button,} from "@/components";
import Basket from '@/assets/svg/basket.svg?react'

type CardFooterProps = {
    text: string;
    price: string;
    basketQuantity?: number
}

export const CardFooter: FC<CardFooterProps> = (props) => {
    const {text, price, basketQuantity = 0} = props

    return (
        <div className={styles.cardFooter}>
            <div className={styles.textContainer}>
                <p className={styles.text}>{text}</p>
                <p className={styles.price}>${price}</p>
            </div>

            {basketQuantity === 0
                ? <Button aria-label={'Basket'} className={styles.button}><Basket/></Button>
                : <AddedControl amountProducts={basketQuantity} />
            }
        </div>
    );
};


