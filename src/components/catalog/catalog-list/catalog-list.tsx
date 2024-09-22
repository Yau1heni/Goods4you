import {FC} from 'react';
import styles from './catalog-list.module.css'
import {CatalogCard} from "./catalog-card/catalog-card.tsx";
import {UpdatedProducts} from "@/types";

type CatalogListProps = {
    catalog: UpdatedProducts[]
}

export const CatalogList: FC<CatalogListProps> = ({catalog}) => {
    const catalogListRender = catalog.map(item => <CatalogCard key={item.id} cardData={item}/>)

    return (
        <div className={styles.catalogList}>
            {catalogListRender}
        </div>
    );
};
