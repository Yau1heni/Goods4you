import {Cart, Layout} from "@/components";
import {useEffect} from "react";

export const CartPage = () => {
    useEffect(() => {
        document.title = 'My cart | Goods4you';
    }, []);

    return (
        <Layout>
            <Cart/>
        </Layout>
    );
};
