import Star from '@/assets/svg/star.svg?react'

const rating = [1, 2, 3, 4, 5];

const getStarColor = (value: number, ratingValue: number) => {
    return value <= ratingValue ? 'var(--color-orange)' : 'var(--color-gray-200)';
};

export const getRatingList = (ratingValue: number) => {
    return rating.map(value => (
        <Star key={value} color={getStarColor(value, ratingValue)}/>
    ));

};