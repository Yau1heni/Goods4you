import {useRouteError} from "react-router-dom";
import style from './error-page.module.css'

export const ErrorPage = () => {
   const error = useRouteError() as {
        statusText: string;
        message: string;
    };

    return (
        <div id="error-page" className={style.errorPage}>
            <h1 className={style.text}>Oops!</h1>
            <p className={style.text}>Sorry, an unexpected error has occurred.</p>
            <p className={style.text}>
                {error.statusText || error.message}
            </p>
        </div>
    );
}