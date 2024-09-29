import styles from './catalog.module.css'
import commonStyles from "@/styles/common.module.css";
import {CatalogList} from "./catalog-list/catalog-list.tsx";
import {Button, Loader, TitleSection} from "@/components";
import {useGetProductsQuery} from "@/services";
import {ChangeEvent, useState} from "react";
import {useDebounce} from "@/hooks";

const PRODUCT_LIMIT = 12

export const Catalog = () => {
    const [skip, setSkip] = useState(0)
    const [searchValue, setSearchValue] = useState("")

    const debouncedSearchValue = useDebounce<string>(searchValue, 1000)

    const {data, isFetching} = useGetProductsQuery({limit: PRODUCT_LIMIT, skip, q: debouncedSearchValue})

    const onShowMoreHandler = () => {
        setSkip(prevState => prevState + PRODUCT_LIMIT)
    }

    const searchValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)
        setSkip(0)
    }

    return (
        <section className={styles.catalog} id={'catalog'}>
            <div className={commonStyles.container}>
                <TitleSection title={'Catalog'} color={'dark'}/>
                <input onChange={searchValueChangeHandler} className={styles.input} type="text" name="input-search"
                       placeholder={'Search by title'}/>

                <CatalogList catalog={data?.products || []}/>

                {data && data.total > data.products.length &&
                    <Button onClick={onShowMoreHandler} className={styles.showMore}>Show more</Button>}
            </div>

            {isFetching && <Loader/>}
        </section>
    );
};
