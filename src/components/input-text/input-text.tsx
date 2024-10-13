import { ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode } from 'react';
import styles from './input-text.module.css';
import { clsx } from 'clsx';

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type InputTextProps = Omit<DefaultInputPropsType, 'type'> & {
  onChangeText?: (value: string) => void;
  onEnter?: () => void;
  error?: ReactNode;
  spanClassName?: string;
};

export const InputText: FC<InputTextProps> = (props) => {
  const { onChange, onChangeText, error, className, id, placeholder, ...restProps } = props;

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    onChangeText?.(e.currentTarget.value);
  };

  const finalInputClassName = clsx(className, styles.input, error && styles.error);

  return (
    <input
      id={id}
      type={'text'}
      onChange={onChangeCallback}
      className={finalInputClassName}
      placeholder={placeholder}
      {...restProps}
    />
  );
};
