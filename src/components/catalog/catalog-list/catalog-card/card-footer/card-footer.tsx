import {FC, useState} from 'react';
import styles from './card-footer.module.css'
import {AddedControl, Button,} from "@/components";
import Basket from '@/assets/svg/basket.svg?react'

type CardFooterProps = {
    text: string;
    price: number;
}

export const CardFooter: FC<CardFooterProps> = ({text, price}) => {
    const [isAdded, setIsAdded] = useState(false)

    const addProductHandler = () => {
        setIsAdded(true)
    }

    return (
        <div className={styles.cardFooter}>
            <div className={styles.textContainer}>
                <p className={styles.text}>{text}</p>
                <p className={styles.price}>${price}</p>
            </div>

            {isAdded
                ? <AddedControl/>
                : <Button aria-label={'Basket'} onClick={addProductHandler} className={styles.button}><Basket/></Button>
            }
        </div>
    );
};


