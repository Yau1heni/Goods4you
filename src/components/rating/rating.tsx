import { FC } from 'react';
import styles from './rating.module.css';
import { getRatingList } from '@/utils/get-rating-list.tsx';

type RatingProps = {
  ratingValue: number;
};

export const Rating: FC<RatingProps> = ({ ratingValue }) => {
  const ratingList = getRatingList(ratingValue);

  return <div className={styles.rating}>{ratingList}</div>;
};
