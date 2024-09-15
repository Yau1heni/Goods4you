import {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import styles from './button.module.css'
import {clsx} from "clsx";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>


export const Button = (props: DefaultButtonPropsType) => {
    const {disabled, className, children, ...restProps} = props

    const finalClassName = clsx(styles.button, className)

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps}
        >
            {children}
        </button>
    )
}