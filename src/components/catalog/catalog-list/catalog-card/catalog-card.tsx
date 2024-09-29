import {FC} from 'react';
import styles from './catalog-card.module.css'
import {CardFooter} from "./card-footer/card-footer.tsx";
import {Link} from "react-router-dom";
import {Paths} from "@/pages";
import {UpdatedProduct} from "@/types";
import {calculatePriceWithDiscount} from "@/utils";

type CatalogCardProps = {
    cardData: UpdatedProduct
    refetch: () => void;
}

export const CatalogCard: FC<CatalogCardProps> = ({cardData, refetch}) => {
    const {thumbnail, price, discountPercentage, id} = cardData

    const productPath = Paths.PRODUCT.replace(':productId', String(id));
    const finalPrice = calculatePriceWithDiscount(price, discountPercentage)

    return (
        <div className={styles.catalogCard}>
            <Link to={productPath}>
                <div className={styles.image}>
                    <div className={styles.overlay}>Show details</div>
                    <img src={thumbnail} alt='catalog-item' width={370} height={300}/>
                </div>
            </Link>
            <CardFooter refetch={refetch} cardData={cardData} price={finalPrice} />
        </div>
    );
};
