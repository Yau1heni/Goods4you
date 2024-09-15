import {PropsWithChildren} from "react";
import {Header} from "../header/header.tsx";
import {Footer} from "../footer/footer.tsx";
import styles from './layout.module.css'

export const Layout = ({children}: PropsWithChildren) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Header/>
                <main>
                    {children}
                </main>
            </div>
            <Footer/>
        </div>
    );
};
