import './styles.css';
import { useState } from 'react';

export default function RateStars({ rating = 0, onRate }) {
    const [selectedRating, setSelectedRating] = useState(rating);
    const [hoveredRating, setHoveredRating] = useState(0);

    const handleMouseEnter = (index) => setHoveredRating(index);
    const handleMouseLeave = () => setHoveredRating(0);
    const handleClick = (index) => {
        setSelectedRating(index);
        if (onRate) onRate(index);
    };

    const stars = Array.from({ length: 5 }, (_, i) => {
        const starValue = i + 1;
        const isFilled = starValue <= (hoveredRating || selectedRating);

        return (
            <span
                key={i}
                className={`star ${isFilled ? 'filled' : ''}`}
                onMouseEnter={() => handleMouseEnter(starValue)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(starValue)}
                role="button"
                aria-label={`Rate ${starValue} stars`}
            >
                ★
            </span>
        );
    });

    return <div className="rate-stars">{stars}</div>;
}
