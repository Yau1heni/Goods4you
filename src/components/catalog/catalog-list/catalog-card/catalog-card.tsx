import {FC} from 'react';
import styles from './catalog-card.module.css'
import {CardFooter} from "@/components/catalog/catalog-list/catalog-card/card-footer/card-footer.tsx";
import {Link} from "react-router-dom";
import {Paths} from "@/pages";
import {CatalogCardItem} from "@/mock-data/catalog.types.ts";

type CatalogCardProps = {
    cardData: CatalogCardItem
}

export const CatalogCard: FC<CatalogCardProps> = ({cardData}) => {
    const {image, price, text} = cardData

    const productPath = Paths.PRODUCT.replace(':productId', '12');

    return (
        <div className={styles.catalogCard}>
            <Link to={productPath}>
                <div className={styles.image}>
                    <div className={styles.overlay}>Show details</div>
                    <img src={image} alt='catalog-item' width={370} height={300}/>
                </div>
            </Link>
            <CardFooter text={text} price={price}/>
        </div>
    );
};
