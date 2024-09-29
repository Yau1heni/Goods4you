import {FC} from 'react';
import styles from './main-title.module.css'
import {Paths} from "@/pages";
import {Link as RouterLink} from "react-router-dom";

type MainTitleProps = {
    title: string
}

export const MainTitle: FC<MainTitleProps> = ({title}) => {
    return (
        <RouterLink className={styles.title} to={Paths.CATALOG}><h1>{title}</h1></RouterLink>
    );
};
