import styles from "./product.module.css";
import {clsx} from "clsx";
import commonStyles from "@/styles/common.module.css";
import {Gallery} from "./gallery/gallery.tsx";
import {ProductInfo} from "./product-info/product-info.tsx";

export const Product = () => {
    return (
        <section className={clsx(commonStyles.container, styles.product)}>
            <Gallery/>
            <ProductInfo/>
        </section>
    );
};
