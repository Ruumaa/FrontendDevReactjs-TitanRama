import clsx from 'clsx';
import React from 'react';

interface RatingProps {
  reviews: { rating: number }[];
  className?: string;
}

const Rating: React.FC<RatingProps> = ({ reviews, className }) => {
  const averageRating =
    reviews.length > 0
      ? Math.round(
          reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length
        )
      : 0;

  return (
    <div className="flex items-center -mt-1 mb-1">
      {[...Array(5)].map((_, index) => (
        <label
          key={index}
          className={clsx(
            'text-[#0C2B56] text-2xl cursor-pointer hover:scale-110',
            className
          )}
        >
          {index < averageRating ? '★' : '☆'}
        </label>
      ))}
    </div>
  );
};

export default Rating;
