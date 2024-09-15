import {FC} from 'react';
import styles from './title-section.module.css'
import {clsx} from "clsx";

type TitleSectionProps = {
    title: string
    color?: 'dark' | 'light'
    className?: string
}

export const TitleSection: FC<TitleSectionProps> = (props) => {
    const {title, color = 'light', className} = props

    const finalClassName = clsx(styles.title, color === 'dark' && styles.dark, className)

    return (
        <h2 className={finalClassName}>
            {title}
        </h2>
    );
};
