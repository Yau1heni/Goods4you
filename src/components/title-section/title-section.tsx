import { FC } from 'react';
import styles from './title-section.module.css';
import { clsx } from 'clsx';
import { Theme } from '@/types';

type TitleSectionProps = {
  title: string;
  color?: Theme;
  className?: string;
};

export const TitleSection: FC<TitleSectionProps> = (props) => {
  const { title, color = Theme.LIGHT, className } = props;

  const finalClassName = clsx(styles.title, color === Theme.DARK && styles.dark, className);

  return <h2 className={finalClassName}>{title}</h2>;
};
