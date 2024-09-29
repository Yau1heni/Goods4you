import styles from './catalog.module.css'
import commonStyles from "@/styles/common.module.css";
import {CatalogList} from "./catalog-list/catalog-list.tsx";
import {Button, Loader, TitleSection, InputText} from "@/components";
import {useGetProductsQuery} from "@/services";
import {ChangeEvent, useState} from "react";
import {useDebounce} from "@/hooks";
import {Theme} from "@/types";

const PRODUCT_LIMIT = 12

export const Catalog = () => {
    const [skip, setSkip] = useState(0)
    const [searchValue, setSearchValue] = useState("")

    const debouncedSearchValue = useDebounce<string>(searchValue, 1000)

    const {data, isFetching, refetch} = useGetProductsQuery({limit: PRODUCT_LIMIT, skip, q: debouncedSearchValue})

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
                <TitleSection title={'Catalog'} color={Theme.DARK}/>
                <InputText className={styles.input}
                           onChange={searchValueChangeHandler}
                           name={'input-search'}
                           placeholder={'Search by title'}/>

                <CatalogList refetch={refetch} catalog={data?.products || []}/>

                {data && data.total > data.products.length &&
                    <Button onClick={onShowMoreHandler} className={styles.showMore}>Show more</Button>}
            </div>

            {isFetching && <Loader/>}
        </section>
    );
};
