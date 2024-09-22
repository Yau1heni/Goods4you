import {FC} from 'react';
import styles from './catalog-card.module.css'
import {CardFooter} from "@/components/catalog/catalog-list/catalog-card/card-footer/card-footer.tsx";
import {Link} from "react-router-dom";
import {Paths} from "@/pages";
import {UpdatedProducts} from "@/types";
import {calculatePriceWithDiscount} from "@/utils/calculate-price-with-discont.ts";

type CatalogCardProps = {
    cardData: UpdatedProducts
}

export const CatalogCard: FC<CatalogCardProps> = ({cardData}) => {
    const {thumbnail, price, title, discountPercentage, id, quantity} = cardData

    const productPath = Paths.PRODUCT.replace(':productId', String(id));
    const finalPrice = calculatePriceWithDiscount(price, discountPercentage)

    return (
        <div className={styles.catalogCard}>
            <Link to={productPath} state={{basketQuantity: quantity}}>
                <div className={styles.image}>
                    <div className={styles.overlay}>Show details</div>
                    <img src={thumbnail} alt='catalog-item' width={370} height={300}/>
                </div>
            </Link>
            <CardFooter text={title} price={finalPrice} basketQuantity={quantity}/>
        </div>
    );
};
