import styles from "./product.module.css";
import {clsx} from "clsx";
import commonStyles from "@/styles/common.module.css";
import {Gallery} from "./gallery/gallery.tsx";
import {ProductInfo} from "./product-info/product-info.tsx";
import {useGetProductQuery} from "@/services/products-api/products-api.ts";
import {useParams} from "react-router-dom";
import {skipToken} from "@reduxjs/toolkit/query";
import {Loader} from "@/components";

export const Product = () => {
    const {productId} = useParams()
    const {data, isFetching} = useGetProductQuery(productId ?? skipToken);

    return (
        <section className={clsx(commonStyles.container, styles.product)}>
            {data && <Gallery image={data.thumbnail} images={data.images}/>}
            {data && <ProductInfo product={data}/>}
            {isFetching && <Loader/>}
        </section>
    )
};
