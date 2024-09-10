import {createBrowserRouter} from "react-router-dom";
import {ErrorPage} from "@/pages";
import {App, Paths} from "@/app";

export const router = createBrowserRouter([
    {
        path: Paths.CATALOG,
        element: <App/>,
        errorElement: <ErrorPage/>,
    },
]);