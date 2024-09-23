import styles from './catalog.module.css'
import commonStyles from "@/styles/common.module.css";
import {CatalogList} from "./catalog-list/catalog-list.tsx";
import {Button, TitleSection} from "@/components";
import {catalog} from "@/mock-data/catalog-data.ts";

export const Catalog = () => {
    return (
        <section className={styles.catalog} id={'catalog'}>
            <div className={commonStyles.container}>
                <TitleSection title={'Catalog'} color={'dark'}/>
                <input className={styles.input} type="text" name="input-search" placeholder={'Search by title'}/>
                <CatalogList catalog={catalog}/>
                <Button className={styles.showMore}>Show more</Button>
            </div>
        </section>
    );
};
