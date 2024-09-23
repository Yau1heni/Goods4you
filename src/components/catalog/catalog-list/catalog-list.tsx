import {FC} from 'react';
import styles from './catalog-list.module.css'
import {CatalogCard} from "./catalog-card/catalog-card.tsx";
import {CatalogCardItem} from "@/mock-data/catalog.types.ts";

type CatalogListProps = {
    catalog: CatalogCardItem[]
}

export const CatalogList: FC<CatalogListProps> = ({catalog}) => {
    const catalogListRender = catalog.map(item => <CatalogCard key={item.id} cardData={item}/>)

    return (
        <div className={styles.catalogList}>
            {catalogListRender}
        </div>
    );
};
