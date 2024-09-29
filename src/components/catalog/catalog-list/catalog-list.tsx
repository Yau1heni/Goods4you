import {FC} from 'react';
import styles from './catalog-list.module.css'
import {CatalogCard} from "./catalog-card/catalog-card.tsx";
import {UpdatedProduct} from "@/types";

type CatalogListProps = {
    catalog: UpdatedProduct[]
    refetch: () => void;
}

export const CatalogList: FC<CatalogListProps> = ({catalog, refetch}) => {
    const catalogListRender = catalog.map(item => <CatalogCard refetch={refetch} key={item.id} cardData={item}/>)

    return (
        <div className={styles.catalogList}>
            {catalogListRender}
        </div>
    );
};
