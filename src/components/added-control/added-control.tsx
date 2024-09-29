import Increase from '@/assets/svg/plus.svg?react'
import Decrease from '@/assets/svg/minus.svg?react'
import styles from './added-control.module.css'
import {Button} from "@/components";
import {FC} from 'react';

type AddedControlProps = {
    amountProducts: number
}

export const AddedControl: FC<AddedControlProps> = ({amountProducts}) => {
    // const [amountProducts, setAmountProducts] = useState(1)

    const increaseAmountProductsHandler = () => {
        // setAmountProducts(prevState => prevState + 1)
    }

    const decreaseAmountProductsHandler = () => {
        // setAmountProducts(prevState => prevState - 1)
    }

    const itemsText = amountProducts <= 1 ? 'item' : 'items'

    return (
        <div className={styles.addedControl}>
            <Button className={styles.button} disabled={amountProducts === 0} onClick={decreaseAmountProductsHandler}>
                <Decrease/>
            </Button>
            <div className={styles.textContainer}>
                <p className={styles.text}>{amountProducts} {itemsText}</p>
            </div>
            <Button className={styles.button} onClick={increaseAmountProductsHandler}>
                <Increase/>
            </Button>
        </div>
    );
};
