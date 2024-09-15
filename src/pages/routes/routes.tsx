import {createBrowserRouter} from "react-router-dom";
import {CartPage, ContentPage, ErrorPage, ProductPage} from "@/pages";
import {Paths} from "./paths.enum.ts";

export const router = createBrowserRouter([
    {
        path: Paths.CATALOG,
        element: <ContentPage/>,
        errorElement: <ErrorPage/>,
    },
   {
        path: Paths.PRODUCT,
        element: <ProductPage/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: Paths.CART,
        element: <CartPage/>,
        errorElement: <ErrorPage/>,
    },
]);