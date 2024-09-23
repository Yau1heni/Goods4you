import {Layout, Product} from "@/components";
import {useEffect} from "react";

export const ProductPage = () => {
    useEffect(() => {
        document.title = 'Essence Mascara Lash Princess | Goods4you';
    }, []);

    return (
        <Layout>
            <Product/>
        </Layout>
    );
};

